import { v1 as uuid } from "uuid";
import { Todo } from "../type";

// constanst for action types
const CREATE_TODO = "CREATE_TODO";
const EDIT_TODO = "EDIT_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action types
export type ActionType =
  | { type: typeof CREATE_TODO; payload: Todo }
  | { type: typeof EDIT_TODO; payload: { id: string; desc: string } }
  | { type: typeof TOGGLE_TODO; payload: { id: string } }
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
}: {
  id: string;
}): ActionType => ({ type: TOGGLE_TODO, payload: { id } });

export const deleteTodoActionCreator = ({
  id,
}: {
  id: string;
}): ActionType => ({ type: DELETE_TODO, payload: { id } });

// reducer
const initialState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false,
  },
];

export const todosReducer = (
  state = initialState,
  action: ActionType
): Todo[] => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, desc: action.payload.desc }
          : todo
      );
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
