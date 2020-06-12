import {
  createStore as reduxCreateStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import * as reducers from "./reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({ ...reducers, router: connectRouter(history) }),
    compose(applyMiddleware(routerMiddleware(history), logger, thunk))
  );
}
