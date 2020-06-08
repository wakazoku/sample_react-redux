import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";
import storageMiddleware from "../middlewares/storageMiddleware";
import createRootReducer from "../reducers/index";

export const history = createBrowserHistory();
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), logger, storageMiddleware)
    )
  );
  return store;
}
