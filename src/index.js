import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Link } from "react-router-dom";
import routes from "./routes";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Layout className="layout" id="components-layout-demo-top">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/news">新闻</Link>
          </Menu.Item>
          <Menu.Item key="3">xx</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{routes}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2020 Created by Ant UED
      </Footer>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
