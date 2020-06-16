import React from "react";
import "./index.css";
import { Spin } from "antd";

function Loading() {
  return (
    <div className="example">
      <Spin />
    </div>
  );
}

export default React.memo(Loading);
