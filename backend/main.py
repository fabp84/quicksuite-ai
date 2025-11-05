from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from rembg import remove
from PIL import Image
import io
import pdfplumber
import pytesseract

app = FastAPI()

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    # Read the uploaded image
    img_bytes = await file.read()
    img = Image.open(io.BytesIO(img_bytes))
    # Remove background using rembg
    result = remove(img)
    buf = io.BytesIO()
    result.save(buf, format="PNG")
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")

@app.post("/parse-form")
async def parse_form(file: UploadFile = File(...)):
    # Extract text from PDF using pdfplumber; fallback to OCR if needed
    pdf_bytes = await file.read()
    text = ""
    try:
        with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception:
        # Use OCR via pytesseract if pdfplumber fails
        try:
            image = Image.open(io.BytesIO(pdf_bytes))
            text = pytesseract.image_to_string(image)
        except Exception:
            text = ""
    return {"text": text}
