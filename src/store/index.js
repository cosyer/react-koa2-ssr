import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

export const getServerStore = () =>
  createStore(reducers, applyMiddleware(thunk, logger));

export const getClientStore = () => {
  // 客户端脱水，从页面中拿到数据
  let initState = window.context && window.context.state;
  return createStore(reducers, initState, applyMiddleware(thunk, logger));
};
