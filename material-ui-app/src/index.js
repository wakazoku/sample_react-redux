import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/index";
import TodoApp from "./containers/TodoApp";
import Error from "./components/Error";

// 初期値をローカルストレージから取得
const savedState = JSON.parse(localStorage.getItem("app-state"));

// Storeの生成
const store = configureStore(savedState ? savedState : {}); // 必要ならstateの初期値を引数に

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
