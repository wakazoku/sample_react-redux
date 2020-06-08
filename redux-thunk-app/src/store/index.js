import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";
import storageMiddleware from "../middlewares/storageMiddleware";
import createRootReducer from "../reducers/index";

const savedState = JSON.parse(localStorage.getItem("app-state"));
console.log(savedState);

export const history = createBrowserHistory();
export default function configureStore(
  preloadedState = savedState ? savedState : {}
) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), logger, storageMiddleware)
    )
  );
  return store;
}
