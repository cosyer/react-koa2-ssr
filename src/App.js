import "./App.css";
import { Button, Tag } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as UserActions from "./store/user/createActions";

import logo from "./logo.svg";

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    console.log("哈哈哈~ 服务器渲染成功了！");
    this.props.propGetQuotations();
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
  };

  handleIncreaseAge = () => {
    this.props.propIncrementAge();
  };

  render() {
    const { number } = this.state;
    const { user } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Tag color="magenta">{user.quotations.hitokoto || "--"}</Tag>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>number: {number}</p>
          <Button type="primary" onClick={this.handleClick}>
            click
          </Button>
          <p>
            {user.name}:{user.age}
          </p>
          <Button type="primary" onClick={this.handleIncreaseAge}>
            increase age
          </Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  propIncrementAge() {
    dispatch(UserActions.incrementAge());
  },
  propGetQuotations() {
    dispatch(UserActions.getQuotations());
  },
});

// 给类添加静态方法
App.loadData = (store) => store.dispatch(UserActions.getSchoolList());

export default connect(mapStateToProps, mapDispatchToProps)(App);
