import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

export const getServerStore = () =>
  createStore(reducers, applyMiddleware(thunk, logger));

export const getClientStore = () =>
  createStore(reducers, applyMiddleware(thunk, logger));
