import { createStore } from "redux";
import { reducers } from "./RootReducer";

export const store = createStore(reducers);
