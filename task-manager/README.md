# 📋 Task Manager

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com **Angular 19**, **Angular Material** e **FastAPI**, permitindo criar, editar, concluir, excluir e pesquisar tarefas em uma interface intuitiva e responsiva.

## 🚀 Deploy

🔗 **Aplicação:** https://task-manager-eosin-ten-31.vercel.app

📚 **Documentação da API (Swagger):** https://task-api-1-053k.onrender.com/docs

## ✨ Funcionalidades

- ✅ Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- ✔️ Marcar tarefas como concluídas
- 💬 Confirmação antes da exclusão
- 📱 Interface responsiva
- ☁️ Deploy completo (Frontend + Backend)
- 🔄 Alterar status da tarefa
- 🔍 Pesquisar tarefas em tempo real
- 📊 Dashboard com estatísticas:

  - Total de tarefas
  - Tarefas concluídas
  - Tarefas pendentes

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- Angular 19
- Angular Material
- TypeScript
- HTML5
- CSS3
- RxJS

### Back-end

- FastAPI
- Python
- SQLAlchemy
- SQLite
- Uvicorn

### Deploy

- Vercel (Frontend)
- Render (Backend)

## 📂 Estrutura do Projeto

```text
task-manager
│
├── src
│   ├── app
│   │   ├── components
│   │   ├── models
│   │   ├── pages
│   │   ├── services
│   │   └── environments
│   │
│   ├── assets
│   └── styles.css
│
├── package.json
├── angular.json
└── README.md
```

---

## 📡 API

A API foi desenvolvida utilizando **FastAPI**.

Documentação interativa:

```
https://task-api-1-053k.onrender.com/docs
```

Principais endpoints:

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | /tasks | Lista todas as tarefas |
| GET | /tasks/{id} | Busca uma tarefa |
| POST | /tasks | Cria uma tarefa |
| PUT | /tasks/{id} | Atualiza uma tarefa |
| DELETE | /tasks/{id} | Remove uma tarefa |

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

- Componentização com Angular
- Standalone Components
- Comunicação entre componentes
- Consumo de API REST
- Reactive Forms
- Angular Material
- Serviços e Injeção de Dependência
- Observables (RxJS)
- CRUD completo
- Deploy de aplicações Angular
- Deploy de APIs FastAPI
- Configuração de CORS
- Integração Front-end + Back-end

---

👨‍💻 Autor: Jairo Andrade

🔗 LinkedIn: https://www.linkedin.com/in/jairo-andrade-642724269

🔗 GitHub: https://github.com/Jairocpdev/task-api