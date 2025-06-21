from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/message")
def get_message():
    return {"message": "Hello from FastAPI backend!"}
