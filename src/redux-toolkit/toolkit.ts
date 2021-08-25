import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

import { Todo } from "../type";

const todosInitialState: Todo[] = [
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

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    edit: (state, action: PayloadAction<{ id: string; desc: string }>) => {
      const todoToEdit = state.find((todo) => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.desc = action.payload.desc;
      }
      // return state.map((todo) =>
      //   todo.id === action.payload.id
      //     ? { ...todo, desc: action.payload.desc }
      //     : todo
      // );
    },
    toggle: (state, action: PayloadAction<{ id: string }>) => {
      const todoToEdit = state.find((todo) => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.isComplete = !todoToEdit.isComplete;
      }
      // return state.map((todo) =>
      //   todo.id === action.payload.id
      //     ? { ...todo, isComplete: !todo.isComplete }
      //     : todo
      // );
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      // return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
