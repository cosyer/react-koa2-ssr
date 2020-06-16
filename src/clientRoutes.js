import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Home from "./component/home";
// import News from "./component/news";
// import School from "./component/school";
// import NotFound from "./component/404";
import App from "./App.js";
// loading效果
import Loading from "./component/loading";
// 骨架屏
import SkeletonView from "./component/skeletonView";

// 延迟加载回调
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={Math.random() >= 0.5 ? <Loading /> : <SkeletonView />}>
      <Component {...props}></Component>
    </Suspense>
  );
};

// 组件懒加载 服务端还是用react-loadable
// const News = lazy(() => import("./component/news"));
const News = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            // 模拟ES Module
            {
              // 模拟export default
              default: function render() {
                return <div>News</div>;
              },
            }
          ),
        1000
      )
    )
);
const School = lazy(() => import("./component/school"));
const NotFound = lazy(() => import("./component/404"));

// 多级路由
export default [
  {
    path: "/",
    component: App,
    key: "app",
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: "Home",
      },
      {
        path: "/news",
        component: SuspenseComponent(News),
        exact: true,
        key: "News",
      },
      {
        path: "/school",
        component: SuspenseComponent(School),
        loadData: School.loadData,
        exact: true,
        key: "School",
      },
      {
        component: NotFound,
      },
    ],
  },
];
