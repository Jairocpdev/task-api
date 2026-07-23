from fastapi import FastAPI

from app.database import Base, engine
from app import models

from app.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI (
    title="Task API",
    description="API de gerenciamento de tarefas",
    version="1.0.0"
)

app.include_router(router)

@app.get(
    "/",
    tags=["Sistema"],
    summary="Página inicial"
)

def home():
    return {"mensagem": "Bem-vindo à Task API!"}
