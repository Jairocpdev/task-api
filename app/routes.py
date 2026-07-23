from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, schemas
from app.database import SessionLocal



router = APIRouter(
    prefix="",
    tags=["Tasks"]
)


def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

@router.get(
    "/tasks/{task_id}",
    response_model=schemas.TaskResponse,
    summary="Buscar tarefa",
    description="Busca uma tarefa pelo seu ID."
)
def get_task(task_id: int, db: Session = Depends(get_db)):
    task = crud.get_task(db, task_id)

    if task is None:
        raise HTTPException(
            status_code=404,
            detail="Tarefa não encontrada."
        )

    return task

@router.post("/tasks", 
             summary="Criar tarefa", 
             description="Cria uma nova tarefa no banco de dados.")
def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task)

@router.put(
    "/tasks/{task_id}",
    response_model=schemas.TaskResponse,
    summary="Atualizar tarefa",
    description="Atualiza os dados de uma tarefa existente."
)

def update_task(
    task_id: int,
    task: schemas.TaskCreate,
    db: Session = Depends(get_db)
):
    updated_task = crud.update_task(db, task_id, task)

    if updated_task is None:
        raise HTTPException(
            status_code=404,
            detail="Tarefa não encontrada."
        )

    return updated_task

@router.delete(
    "/tasks/{task_id}",
    response_model=schemas.TaskResponse,
    summary="Excluir tarefa",
    description="Remove uma tarefa do banco de dados."
)

def delete_task(task_id: int, db: Session = Depends(get_db)):
    deleted_task = crud.delete_task(db, task_id)

    if deleted_task is None:
        raise HTTPException(
            status_code=404,
            detail="Tarefa não encontrada."
        )

    return deleted_task

