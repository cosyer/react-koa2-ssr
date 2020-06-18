import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import TypingCard from "../typingCard";

class News extends Component {
  render() {
    const cardContent = `
    开发文档请戳这里 <a href="https://nlrx-wjc.github.io/react-antd-admin-template-doc/" target="_blank">react-antd-admin-template开发文档</a>。
    目前正在编写完善中...
  `;
    return (
      <React.Fragment>
        <Helmet>
          <title>hello, News</title>
          <meta name="描述" content="这是 News 页面" />
        </Helmet>
        <TypingCard title="开发文档" source={cardContent} />
      </React.Fragment>
      // <Redirect to="/" />
    );
  }
}

export default News;
