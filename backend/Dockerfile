
# ===============================
# Stage 1 – Build Dependencies
# ===============================
FROM python:3.11-slim AS builder

# Install build tools
RUN apt-get update && apt-get install -y build-essential

# Set work directory
WORKDIR /app

# Install pipenv or requirements
COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install --user -r requirements.txt

# ===============================
# Stage 2 – Final Image
# ===============================
FROM python:3.11-slim

# Copy installed packages from builder
COPY --from=builder /root/.local /root/.local

# Set PATH to include user-level bin
ENV PATH=/root/.local/bin:$PATH

# Set work directory
WORKDIR /app

# Copy app source code
COPY app ./app

# Expose port
EXPOSE 8000

# Run FastAPI app with Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
