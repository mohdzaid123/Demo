import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      token: "",
      pushs: false,
    };
  }
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ isAuthenticated: false, token: "", pushs: false });
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Logout);
