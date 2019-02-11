import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import authReducer from "./authReducer";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const reducers = combineReducers({ reducer, authReducer });

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
