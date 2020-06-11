import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import News from "./component/news";

export default (
  <React.Fragment>
    <Route path="/" exact component={App} />
    <Route path="/news" component={News} />
  </React.Fragment>
);
