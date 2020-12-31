import { createStore, applyMiddleware } from "redux";
import {middlewares} from "../src/myStore";
import rootReducer from "../src/reducers/rootReducer";

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}