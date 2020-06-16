import React, { Component, Fragment } from "react";
import "./index.css";
import { Spin } from "antd";

class Loading extends Component {
  render() {
    return (
      <div className="example">
        <Spin />
      </div>
    );
  }
}

export default Loading;
