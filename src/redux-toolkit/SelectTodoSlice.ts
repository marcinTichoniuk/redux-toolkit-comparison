import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectTodoSlice = createSlice({
  name: "selectedTodo",
  initialState: null as string | null,
  reducers: {
    select: (state, action: PayloadAction<{ id: string }>) => {
      // state = action.payload.id  --> impossible (cannot mutate primitive values directly)
      return action.payload.id;
    },
  },
});
