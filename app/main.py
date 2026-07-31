from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Task API",
    description="API de gerenciamento de tarefas",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "https://https://task-manager-five-chi-58.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get(
    "/",
    tags=["Sistema"],
    summary="Página inicial"
)
def home():
    return {
        "mensagem": "Bem-vindo à Task API!"
    }