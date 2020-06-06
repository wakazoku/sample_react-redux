import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import tasksReducer from "../reducers/tasks";

// hitstoryは[src/index.js]から渡すようにする
export default function createStore(hitstory) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      tasks: tasksReducer,
    }),
    compose(applyMiddleware(routerMiddleware(history)))
  );
}
