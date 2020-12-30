import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import Thunk from "redux-thunk"

const middlewares = [Thunk]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(rootReducer)
console.table({store})