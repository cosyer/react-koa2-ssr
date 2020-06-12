import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Link, Route } from "react-router-dom";
import routes from "./routes";
import { Layout, Menu, Breadcrumb } from "antd";

import { Provider } from "react-redux";
import { getClientStore } from "./store/index";

const { Header, Content, Footer } = Layout;

// 当前默认选中的菜单项
const defaultSelectedKeys =
  routes.findIndex((i) => i.path === window.location.pathname) || 0;

ReactDOM.render(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Layout className="layout" id="components-layout-demo-top">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultSelectedKeys + ""]}
          >
            <Menu.Item key="0">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/news">新闻</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/school">学校</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2020 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
