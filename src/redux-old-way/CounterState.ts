import { ActionType } from "./TodoState";

export const counterReducer = (state = 0, action: ActionType): number => {
  switch (action.type) {
    case "CREATE_TODO":
      return state + 1;
    case "EDIT_TODO":
      return state + 1;
    case "TOGGLE_TODO":
      return state + 1;
    case "DELETE_TODO":
      return state + 1;
    default:
      return state;
  }
};
