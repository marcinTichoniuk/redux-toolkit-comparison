// constanst for action types
const SELECT_TODO = "SELECT_TODO";

// action types
type ActionType = {
  type: typeof SELECT_TODO;
  payload: { id: string };
};

// action creators
export const selectTodoActionCreator = ({
  id,
}: {
  id: string;
}): ActionType => ({ type: SELECT_TODO, payload: { id } });
