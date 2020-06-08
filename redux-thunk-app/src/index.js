import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/index";
import TodoApp from "./containers/TodoApp";
import Error from "./components/Error";

// ローカルストレージから初期値を取得
const savedState = JSON.parse(localStorage.getItem("app-state"));

// Storeの生成
const store = configureStore(savedState ? savedState : {}); // stateの初期値がある場合は引数に設定

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
