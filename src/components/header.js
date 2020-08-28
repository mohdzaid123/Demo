import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    let auth = localStorage.getItem("token");
    
    let authLinks;
    if (auth) {
      authLinks = (
        <div className="grid">
          <div className="items">
            <Link className="L_dec" to="/DJE">
              DJe-commerce
            </Link>
          </div>

          <div className="items">
            <Link className="L_dec" to="/">
              Home
            </Link>
          </div>
        </div>
      );
    } else {
      authLinks = (
        <div className="grid">
          <div className="items">
            <Link className="L_dec" to="/login">
              Login
            </Link>
          </div>

          <div className="items">
            <Link className="L_dec" to="/signUp">
              SignUp
            </Link>
          </div>
        </div>
      );
    }
    return authLinks;
  }
}

export default withRouter(Header);
