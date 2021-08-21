export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: Todo["id"] | null;
  counter: number;
}
