import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    // props.history.push()
    props.history.listen((location) => {
      // 在这里监听location对象
      console.log(location.pathname);
      switch (
        location.pathname //根据路径不同切换不同的浏览器title
      ) {
        case "/":
          document.title = "首页";
          break;
        case "/news":
          document.title = "新闻";
          break;
        case "/school":
          document.title = "学校";
          break;
        default:
          document.title = "首页";
          break;
      }
    });
  }
  render() {
    // 当前路由
    const currentRoute =
      this.props.route.routes.find(
        (i) => i.path === this.props.location.pathname
      ) || {};
    return (
      <Layout className="layout" id="components-layout-demo-top">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[currentRoute.key]}
          >
            <Menu.Item key="Home">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="News">
              <Link to="/news">新闻</Link>
            </Menu.Item>
            <Menu.Item key="School">
              <Link to="/school">学校</Link>
            </Menu.Item>
            <Menu.Item key="Doc">
              <Link to="/doc">开发文档</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{currentRoute.key}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {renderRoutes(this.props.route.routes)}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2020 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
