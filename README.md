# 🚀 Task API

API REST desenvolvida com **Python**, **FastAPI** e **SQLAlchemy** para gerenciamento de tarefas.

O projeto permite criar, listar, buscar, atualizar e excluir tarefas utilizando um banco de dados **SQLite**, seguindo uma organização em camadas.

## 📌 Funcionalidades

* ✅ Criar tarefas
* 📋 Listar todas as tarefas
* 🔎 Buscar tarefa por ID
* ✏️ Atualizar tarefas
* 🗑️ Excluir tarefas
* ✔️ Controlar status de conclusão
* 🗄️ Persistência de dados com SQLite
* 📚 Documentação automática com Swagger

## 🛠️ Tecnologias

* **Python 3.12+**
* **FastAPI**
* **SQLAlchemy**
* **SQLite**
* **Pydantic**
* **Uvicorn**

## 📂 Estrutura do projeto

```text
task-api/
├── app/
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── routes.py
│   ├── schemas.py
│   └── models/
├── .gitignore
├── README.md
├── requirements.txt
├── runtime.txt
└── task.db
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Jairocpdev/task-api.git
```

### 2. Entre na pasta

```bash
cd task-api
```

### 3. Crie um ambiente virtual

```bash
python -m venv venv
```

### 4. Ative o ambiente virtual

No Windows:

```bash
venv\Scripts\activate
```

### 5. Instale as dependências

```bash
pip install -r requirements.txt
```

### 6. Execute a API

```bash
uvicorn app.main:app --reload
```

A API estará disponível em:

```text
http://127.0.0.1:8000
```

## 📚 Documentação da API

O FastAPI disponibiliza documentação interativa automaticamente.

### Swagger UI

```text
http://127.0.0.1:8000/docs
```

### ReDoc

```text
http://127.0.0.1:8000/redoc
```

## 🔗 Principais endpoints

| Método   | Endpoint      | Descrição            |
| -------- | ------------- | -------------------- |
| `POST`   | `/tasks`      | Criar uma tarefa     |
| `GET`    | `/tasks`      | Listar tarefas       |
| `GET`    | `/tasks/{id}` | Buscar tarefa por ID |
| `PUT`    | `/tasks/{id}` | Atualizar tarefa     |
| `DELETE` | `/tasks/{id}` | Excluir tarefa       |

## 📝 Exemplo de requisição

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

## 🏗️ Arquitetura

O projeto utiliza uma organização em camadas para separar responsabilidades e facilitar a manutenção:

```text
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

## 💡 Conceitos aplicados

* API REST
* CRUD
* SQLAlchemy ORM
* Validação de dados com Pydantic
* Injeção de dependências
* Banco de dados SQLite
* Arquitetura em camadas
* Documentação automática de API
* Versionamento com Git e GitHub
* Boas práticas de desenvolvimento

## 🌐 Projeto publicado

**Documentação da API:**

https://task-api-1-053k.onrender.com/docs

## 👨‍💻 Autor

**Jairo Andrade**

* GitHub: https://github.com/Jairocpdev
* LinkedIn: https://www.linkedin.com/in/jairo-andrade-642724269/
