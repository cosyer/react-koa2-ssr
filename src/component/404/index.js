import React, { Component } from "react";
import { Helmet } from "react-helmet";

class NotFound extends Component {
  UNSAFE_componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.NotFound = true);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>hello, 404</title>
          <meta name="描述" content="这是 404 页面" />
        </Helmet>
        404 NotFound
      </div>
    );
  }
}

export default NotFound;
