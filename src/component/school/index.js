import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import * as UserActions from "../../store/user/createActions";

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
  componentDidMount() {
    // 服务端注水失败 客户端自己请求
    if (this.props.user.schoolList.length === 0) {
      this.props.propGetSchoolList();
    }
  }
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
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  propGetSchoolList() {
    dispatch(UserActions.getSchoolList());
  },
});

// 给类添加静态方法
School.loadData = (store) => store.dispatch(UserActions.getSchoolList());

export default connect(mapStateToProps, mapDispatchToProps)(School);
