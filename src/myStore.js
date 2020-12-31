import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import Thunk from "redux-thunk"

const middlewares = [Thunk]

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer)