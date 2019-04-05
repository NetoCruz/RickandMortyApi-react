import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Info from "../info";

function Apps() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/characters" component={App} />
        <Route exact path="/characters/:infoId" component={Info} />
      </Switch>
    </BrowserRouter>
  );
}

export default Apps;
