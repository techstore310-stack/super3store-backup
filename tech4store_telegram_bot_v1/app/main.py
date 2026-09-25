from fastapi import FastAPI

app = FastAPI(title="Tech4Store Bot Backend")

@app.get("/")
def home():
    return {"status":"running"}
