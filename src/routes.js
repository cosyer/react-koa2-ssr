import React from "react";
import { Route } from "react-router-dom";
import Home from "./component/home";
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
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: "Home",
  },
  {
    path: "/news",
    component: News,
    exact: true,
    key: "News",
  },
  {
    path: "/school",
    component: School,
    exact: true,
    key: "School",
  },
];

// 多级路由
// export default [
//   {
//     path: "/",
//     component: App,
//     key: "app",
//     routes: [
//       {
//         path: "/",
//         component: Home,
//         loadData: Home.loadData,
//         exact: true,
//         key: "/",
//       },
//       {
//         path: "/news",
//         component: News,
//         exact: true,
//         key: "/news",
//       },
//     ],
//   },
// ];
