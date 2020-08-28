import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };

    this.loginUser(newUser);
  }

  loginUser = (userData) => {
    axios
      .post("http://amaanx.pythonanywhere.com/auth/login/", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.key);
        this.props.history.push("/");
      })
      .catch((err) => console.error(err));
  };

  render() {
    let auth = localStorage.getItem("token");
    return (
      <div>
        {auth ? <Redirect to="/" /> : null}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password1}
            onChange={this.onChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
