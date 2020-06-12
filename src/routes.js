import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import News from "./component/news";
import School from "./component/school";

// export default (
//   <React.Fragment>
//     <Route path="/" exact component={App} />
//     <Route path="/news" component={News} />
//   </React.Fragment>
// );

// 数组对象形式
export default [
  {
    path: "/",
    component: App,
    exact: true,
    loadData: App.loadData,
    key: "/",
  },
  {
    path: "/news",
    component: News,
    exact: true,
    key: "/news",
  },
  {
    path: "/school",
    component: School,
    exact: true,
    key: "/school",
  },
];
