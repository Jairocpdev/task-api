export interface Task {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

export interface CreateTask {
  titulo: string;
  descricao: string;
  concluida: boolean;
}