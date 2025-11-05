FROM python:3.11-slim

WORKDIR /app

COPY backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

RUN apt-get update && apt-get install -y tesseract-ocr poppler-utils && rm -rf /var/lib/apt/lists/*

COPY backend /app/backend

WORKDIR /app/backend

CMD ["bash","-c","uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
