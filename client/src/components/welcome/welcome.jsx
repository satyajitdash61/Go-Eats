import React, { Component } from "react";
import "./welcome.css";
import logo from "../../images/logo.png";

class WelcomePage extends Component {
  
    constructor(){
        super();
        this.state = {
            userLogIn:"res"
        }
    }

  render() {
    return (
      <div className="container-fluid WelcomeScreen">
          <div id="innerdiv">
            <h1>Go Eats</h1>
            <img src={logo} />
            <h4>Log In as </h4>
            <button id="userbtn" >
              <h5>User</h5>
            </button>
            <button id="restbtn" >
              <h5>Restaurant</h5>
            </button>
          </div>
      </div>
    );
  }
}
export default WelcomePage;
