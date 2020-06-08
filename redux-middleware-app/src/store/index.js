import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
// import { logger } from "redux-logger";
import createRootReducer from "../reducers/index";

const orignalLogger = (store) => (next) => (action) => {
  // Action適用前のstateを表示
  console.log("Action適用前のstateを表示");
  console.log(store.getState());

  // どのようなActionが適用されたのかを表示
  console.log("どのようなActionが適用されたのかを表示");
  console.log(action);

  const result = next(action);

  // Action適用後のstateを表示
  console.log("Action適用後のstateを表示");
  console.log(store.getState());
  console.log("--------------------------------------");

  // 特別な値をreturnする必要はないのでresultをそのまま帰す
  return result;
};

export const history = createBrowserHistory();
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    // compose(applyMiddleware(routerMiddleware(history), logger))
    compose(applyMiddleware(routerMiddleware(history), orignalLogger))
  );
  return store;
}
