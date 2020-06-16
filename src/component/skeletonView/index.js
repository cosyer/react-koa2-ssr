import React, { Component, Fragment } from "react";

import { Skeleton } from "antd";

class SkeletonView extends Component {
  render() {
    return <Skeleton avatar active paragraph={{ rows: 4 }} />;
  }
}

export default SkeletonView;
