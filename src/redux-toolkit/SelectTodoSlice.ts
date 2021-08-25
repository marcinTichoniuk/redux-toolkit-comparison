import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectTodoSlice = createSlice({
  name: "selectedTodo",
  initialState: null as string | null,
  reducers: {
    select: (state, action: PayloadAction<{ id: string }>) => {
      return action.payload.id;
    },
  },
});
