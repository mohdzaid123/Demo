import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
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
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2,
    };

    this.registerUser(newUser);
  }

  registerUser = (userData) => {
    axios
      .post("http://amaanx.pythonanywhere.com/auth/registration/", userData)
      .then((res) => {
        this.props.history.push("/login");
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
            placeholder="Name"
            name="username"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password1"
            value={this.state.password1}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
          />
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
