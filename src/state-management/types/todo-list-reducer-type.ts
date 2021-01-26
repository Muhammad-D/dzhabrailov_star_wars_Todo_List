interface IInitialState {
  todoList: ITodo[];
}

interface ITodo {
  id: number;
  taskStatus: boolean;
  taskDescription: string;
}

export type { IInitialState, ITodo };
