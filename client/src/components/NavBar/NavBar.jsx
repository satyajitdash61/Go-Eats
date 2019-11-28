import React, { Component } from "react";
import "./NavBar.css";
import navlogo from "../../images/navlogo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="">
        <nav>
          <img src={navlogo} alt="" id="navlogo" />
          <ul>
            <li id="sign-in-button"> Sign in  </li>           
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
