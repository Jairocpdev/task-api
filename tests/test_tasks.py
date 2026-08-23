from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_home():
    response = client.get("/")
    assert response.status_code == 200
    assert "mensagem" in response.json()

def test_list_tasks():
    response = client.get("/tasks")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_task():
    payload = {
        "titulo": "Estudar pytest",
        "descricao": "Aprender testes automatizados",
        "concluida": False
    }
    response = client.post("/tasks", json=payload)
    assert response.status_code in [200, 201]
    data = response.json()
    assert data["titulo"] == "Estudar pytest"
    assert "id" in data