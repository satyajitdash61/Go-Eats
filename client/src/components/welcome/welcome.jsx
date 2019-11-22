import React, { useState } from "react";
import "./welcome.css";
import logo from "../../images/logo.png";
function Welcome() {
  const [login, setLogin] = useState("home");

  return (
    <div className="container-fluid WelcomeScreen">
      {
          login==="home"?
        <div id="innerdiv">
          <h1>Go Eats</h1>
          <img src={logo} />
          <h4>Log In as </h4>
          <button id="userbtn" onClick={() => setLogin("res")}>
            <h5>User</h5>
          </button>
          <button id="restbtn" onClick={() => setLogin("user")}>
            <h5>Restaurant</h5>
          </button>
        </div>
        :
        login === "res"?
        <h1>Hello World</h1>
        :
        <h1>Satyajit</h1>
      }
    </div>
  );
}

export default Welcome;
