import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Config/routes";

const renderRoutes = () => {
  return routes.map((val) => {
    return (
      <Route exact key={val.name} path={val.path} component={val.component} />
    );
  });
};

const App = () => {
  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};

export default App;
