import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./context";
import Pages from "./pages";
import { Switch, Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = (props) => {
  const token = Cookies.get("token");
  return token == null ? (
    <Redirect to={{ pathname: "login" }} />
  ) : (
    <Route {...props} />
  );
};

const AutoLoginRoute = (props) => {
  const token = Cookies.get("token");
  return token != null ? (
    <Redirect to={{ pathname: "search" }} />
  ) : (
    <Route path="/login" exact component={Pages.LoginPage} />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search" />} />
          <AutoLoginRoute path="/login" exact component={Pages.LoginPage} />
          <PrivateRoute
            path="/search/:url"
            render={(props) => (
              <Pages.Main
                url={decodeURIComponent(
                  props.match.params.url.replace(/\+/g, " ")
                )}
              />
            )}
          />
          <PrivateRoute path="/search" exact component={Pages.Main} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
