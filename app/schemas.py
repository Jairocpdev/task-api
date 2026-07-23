from pydantic import BaseModel

class TaskBase(BaseModel):
    titulo: str
    descricao: str | None = None
    concluida: bool = False


class TaskCreate(TaskBase):
    pass

class TaskResponse(TaskBase):
    id: int
    class Config: from_attributes = True