import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./RootReducer";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
