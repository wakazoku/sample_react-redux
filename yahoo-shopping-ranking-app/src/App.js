// ルートポイント
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav";
import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        <CssBaseline />
        <AppBar position="static" style={{ left: 240 }}>
          <Toolbar>
            <Typography variant="h6" className="">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />

        <div style={{ padding: 32 }}>
          <Switch>
            <Route path="/all" component={Ranking} />
            <Route path="/category/1" render={() => <Redirect to="/all" />} />
            <Route
              path="/category/:id"
              render={({ match }) => <Ranking categoryId={match.params.id} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
