import { todosSlice } from "./TodosSlice";
import { selectTodoSlice } from "./SelectTodoSlice";
import { counterSlice } from "./CounterSlice";

export const reducer = {
  todos: todosSlice.reducer,
  selectedTodo: selectTodoSlice.reducer,
  counter: counterSlice.reducer,
};
