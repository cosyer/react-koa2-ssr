import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "学校名称",
    dataIndex: "name",
    key: "name",
  },
];

class School extends Component {
  render() {
    const { user } = this.props;
    let dataSource = user.schoolList.map((i) => {
      return {
        id: i.id,
        name: i.name,
      };
    });
    return (
      <React.Fragment>
        <Table dataSource={dataSource} columns={columns} />;
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(School);
