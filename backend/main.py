from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import StreamingResponse
from rembg import remove
from PIL import Image
import io
import pdfplumber
import pytesseract
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import text

# Import Stripe utility for creating checkout sessions
from .stripe_utils import create_checkout_session as stripe_create_checkout_session

app = FastAPI()

# Database setup
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_async_engine(DATABASE_URL, echo=False)
async_session = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
Base = declarative_base()


@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    img_bytes = await file.read()
    img = Image.open(io.BytesIO(img_bytes))
    result = remove(img)
    buf = io.BytesIO()
    result.save(buf, format="PNG")
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")


@app.post("/parse-form")
async def parse_form(file: UploadFile = File(...)):
    pdf_bytes = await file.read()
    text_content = ""
    try:
        with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text_content += page_text + "\n"
    except Exception:
        try:
            image = Image.open(io.BytesIO(pdf_bytes))
            text_content = pytesseract.image_to_string(image)
        except Exception:
            text_content = ""
    return {"text": text_content}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/create-checkout-session/{plan}")
async def create_checkout(plan: str, payload: dict):
    """Endpoint to create a Stripe checkout session for a given plan.

    Args:
        plan: The key identifying the plan (e.g., 'basic_monthly', 'basic_yearly').
        payload: JSON body containing at least an 'email' field.
    """
    try:
        email = payload.get("email")
        session = stripe_create_checkout_session(plan, email)
        return {"url": session.url}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/db-test")
async def db_test():
    async with engine.connect() as conn:
        await conn.execute(text("SELECT 1"))
    return {"status": "ok"}
