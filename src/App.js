import "./App.css";
import { Button } from "antd";
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
    let { number } = this.state;
    let { user } = this.props;
    return (
      <div className="App">
        <header className="App-header">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
