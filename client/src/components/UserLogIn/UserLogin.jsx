import React, { Component } from "react";
import "./Userlogin.css";
import navlogo from "../../images/navlogo.png";

class UserLoginPage extends Component {
  render() {
    return (
      <div className="container-fluid main">
        <nav>
          <img src={navlogo} alt="" id="navlogo"/>
          <ul>
            <li>Sign in</li>
          </ul>
        </nav>
        <div id="tagline">

        </div>
      </div>
    );
  }
}
export default UserLoginPage;
