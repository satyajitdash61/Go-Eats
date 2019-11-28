import React, { Component } from "react";
import "./NavBar.css";
import navlogo from "../../images/navlogo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="">
        <nav>
          <img src={navlogo} alt="" id="navlogo1" />
          <ul>
            <li id="log-out-button"> Log Out  </li>           
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
