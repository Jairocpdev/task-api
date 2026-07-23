# 📋 Task API

Uma API REST desenvolvida com **Python**, **FastAPI** e **SQLAlchemy** para gerenciamento de tarefas.

O projeto permite criar, listar, buscar, atualizar e excluir tarefas utilizando um banco de dados SQLite.

## 🚀 Tecnologias

- Python 3.12+
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

## 📥 Exemplo de requisição

### Criar uma tarefa

```json
{
    "titulo": "Estudar FastAPI",
    "descricao": "Criar minha primeira API",
    "concluida": false
}
```

### Resposta

```json
{
    "id": 1,
    "titulo": "Estudar FastAPI",
    "descricao": "Criar minha primeira API",
    "concluida": false
}
```

A API ficará disponível em:

```
http://127.0.0.1:8000
```

## 🛠 Arquitetura

O projeto segue uma arquitetura em camadas para facilitar a organização e manutenção.

```
Cliente
    │
    ▼
Rotas (FastAPI)
    │
    ▼
CRUD
    │
    ▼
SQLAlchemy ORM
    │
    ▼
SQLite
```

---

## 📚 Conceitos aplicados

- API REST
- CRUD
- SQLAlchemy ORM
- Validação com Pydantic
- Injeção de dependência
- Organização em camadas
- Boas práticas de desenvolvimento

---

## 👨‍💻 Autor

**Jairo Andrade**

- GitHub: https://github.com/Jairocpdev
- LinkedIn: https://www.linkedin.com/in/jairo-andrade-642724269/