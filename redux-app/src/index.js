import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import taskReducer from "./reducers/tasks";
import TodoApp from "./components/TodoApps";

// storeを作成
const store = createStore(taskReducer);

function renderApp(store) {
  render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);
