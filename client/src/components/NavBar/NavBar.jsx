import React, { Component } from "react";
import "./NavBar.css";
import navlogo from "../../images/navlogo.png";
import {Link, Redirect} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <nav>
          <img src={navlogo} alt="" id="navlogo1" />
          <ul>
            <li id="log-out-button"><Link to="/logout" id="signout">Log Out</Link></li>           
          </ul>
        </nav>
    );
  }
}

export default NavBar;
