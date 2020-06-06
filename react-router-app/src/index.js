import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/index";
import TodoApp from "./containers/TodoApp";
import Error from "./components/Error";

// Storeの生成
const store = configureStore(); // 必要ならstateの初期値を引数に

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
