import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>hello, News</title>
          <meta name="描述" content="这是 News 页面" />
        </Helmet>
        <h1>News Page</h1>
      </React.Fragment>
      // <Redirect to="/" />
    );
  }
}

export default News;
