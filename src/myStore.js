import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import Thunk from "redux-thunk"

export const middlewares = [Thunk]

export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer)