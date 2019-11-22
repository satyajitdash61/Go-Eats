import React, { Component } from "react";
import "./welcome.css";
import logo from "../../images/logo.png";
import UserLoginPage from'../UserLogIn/UserLogin'

class WelcomePage extends Component {
  
    constructor(){
        super();
        this.state = {
            userLogIn:"homepage"
        }
    }

  render() {
    return (
        
      <div className="container-fluid WelcomeScreen">
          {
        this.state.userLogIn === "homepage"?
          <div id="innerdiv">
            <h1>Go Eats</h1>
            <img src={logo} />
            <h4>Log In as </h4>
            <button id="userbtn" onClick={() => this.setState({userLogIn:"User"})}>
              <h5>User</h5>
            </button>
            <button id="restbtn" onClick={() => this.setState({userLogIn:"Restaurant"})}>
              <h5>Restaurant</h5>
            </button>
          </div> 
          : this.state.userLogIn === "User"?
           <UserLoginPage/>
          :
          <h1>Restaurant</h1>
         }
      </div>
    );
  }
}
export default WelcomePage;
