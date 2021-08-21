import { counterReducer } from "./CounterState";
import { selectTodoReducer } from "./SelectTodoState";
import { todosReducer } from "./TodoState";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  todos: todosReducer,
  selectedTodo: selectTodoReducer,
  counter: counterReducer,
});
