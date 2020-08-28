import React from "react";
import { Redirect } from "react-router-dom";

function Protected(props) {
  const Cmp = props.cmp;
  let auth = localStorage.getItem("token");
  return <div>{auth ? <Cmp /> : <Redirect to="login"></Redirect>}</div>;
}

export default Protected;
