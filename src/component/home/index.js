import "./index.css";
import { Button, Tag } from "antd";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../store/user/createActions";

import CountUp from "react-countup";
import { CSSTransition } from "react-transition-group";
import logo from "../../logo.svg";

class Home extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    console.log("哈哈哈~ 服务器渲染成功了！");
    this.props.getQuotations();
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
  };

  handleIncreaseAge = () => {
    this.props.incrementAge();
  };

  render() {
    const { number } = this.state;
    const { user } = this.props;
    return (
      <div className="home">
        <Helmet>
          <title>hello, Home</title>
          <meta name="描述" content="这是 Home 页面" />
        </Helmet>
        <header className="home-header">
          <Tag color="magenta">{user.quotations.hitokoto || "--"}</Tag>
          <img src={logo} className="home-logo" alt="logo" />
          <CSSTransition
            in={true}
            classNames={"fade"}
            appear={true}
            key={1}
            timeout={1000}
            unmountOnExit={true}
          >
            <a
              className="home-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React SSR
            </a>
          </CSSTransition>
          <p>number: {number}</p>
          <Button type="primary" onClick={this.handleClick}>
            click
          </Button>
          <p>
            {user.name}: <CountUp start={0} end={user.age} />
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

// const mapDispatchToProps = (dispatch) => ({
//   incrementAge() {
//     dispatch(UserActions.incrementAge());
//   },
//   getQuotations() {
//     dispatch(UserActions.getQuotations());
//   },
// });

// const mapDispatchToProps = (dispatch) => (bindActionCreators(UserActions, dispatch))
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(UserActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
