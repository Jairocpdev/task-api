from sqlalchemy.orm import Session

from app import models, schemas


def create_task(db: Session, task: schemas.TaskCreate):
    db_task = models.Task(
        titulo=task.titulo,
        descricao=task.descricao,
        concluida=task.concluida
    )

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    return db_task

def get_tasks(db: Session):
    return db.query(models.Task).all()

def get_task(db: Session, task_id: int):
    return db.query(models.Task).filter(models.Task.id == task_id).first()

def update_task(db: Session, task_id: int, task_data: schemas.TaskCreate):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if task is None:
        return None

    task.titulo = task_data.titulo
    task.descricao = task_data.descricao
    task.concluida = task_data.concluida

    db.commit()
    db.refresh(task)

    return task

def delete_task(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if task is None:
        return None

    db.delete(task)
    db.commit()

    return task