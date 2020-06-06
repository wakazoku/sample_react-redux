import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createBrowserHistory from "history/createBrowserHistory";
import TodoApp from "./containers/TodoApp";
import Error from "./components/Error";
import createStore from "./store";

// historyのインスタンスを生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
