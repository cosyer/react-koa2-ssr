import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TypingCard from "../typingCard";

class Doc extends Component {
  render() {
    const cardContent = `
    项目地址请戳这里 <a href="https://github.com/cosyer/react-koa2-ssr" target="_blank">react-koa2-ssr</a>。
    开发文档目前正在编写完善中...
  `;
    return (
      <React.Fragment>
        <Helmet>
          <title>hello, Doc</title>
          <meta name="描述" content="这是 Doc 页面" />
        </Helmet>
        <TypingCard title="开发文档" source={cardContent} />
      </React.Fragment>
    );
  }
}

export default Doc;
