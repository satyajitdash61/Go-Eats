import React, { Component } from "react";
import "./Userlogin.css";
import navlogo from "../../images/navlogo.png";

class UserLoginPage extends Component {
  render() {
    return (
        <div>
      <div className="container-fluid main">
        <nav>
          <img src={navlogo} alt="" id="navlogo"/>
          <ul>
            <li>Sign in</li>
          </ul>
        </nav>
        <div id="tagline">
            <span id="go">Go </span><span id="eats">Eats</span><br/><br/>
            <span id="hunger">Hunger ?</span><br/>
            <span id="tag">Want to enjoy your Food?</span> <br/>
            <span id="tag1">Just GoEats it !</span>
        </div>
      </div>
      <div className="container-fluid characteristics">
        <div id="quality_foods">
            
        </div>
        <div id="fast_delivery">

        </div>
        <div id="original_recipes">
            
        </div>
      </div>
      </div>
    );
  }
}
export default UserLoginPage;
