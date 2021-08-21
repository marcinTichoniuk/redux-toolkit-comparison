import { v1 as uuid } from "uuid";
import { Todo } from "../type";

// constanst for action types
const CREATE_TODO = "CREATE_TODO";
const EDIT_TODO = "EDIT_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action types
type ActionType =
  | { type: typeof CREATE_TODO; payload: Todo }
  | { type: typeof EDIT_TODO; payload: { id: string; desc: string } }
  | { type: typeof TOGGLE_TODO; payload: { id: string; isComplete: boolean } }
  | { type: typeof DELETE_TODO; payload: { id: string } };

// action creators
export const createTodoActionCreator = ({
  desc,
}: {
  desc: string;
}): ActionType => ({
  type: CREATE_TODO,
  payload: { id: uuid(), desc, isComplete: false },
});

export const editTodoActionCreator = ({
  id,
  desc,
}: {
  id: string;
  desc: string;
}): ActionType => ({ type: EDIT_TODO, payload: { id, desc } });

export const toggleTodoActionCreator = ({
  id,
  isComplete,
}: {
  id: string;
  isComplete: boolean;
}): ActionType => ({ type: TOGGLE_TODO, payload: { id, isComplete } });

export const deleteTodoActionCreator = ({
  id,
}: {
  id: string;
}): ActionType => ({ type: DELETE_TODO, payload: { id } });
