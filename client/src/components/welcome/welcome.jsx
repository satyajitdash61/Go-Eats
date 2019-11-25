import React, { Component } from "react";
import "./welcome.css";
import logo from "../../images/logo.png";
import UserLoginPage from'../UserLogIn/UserLogin'
import RestaurantLoginPage from '../RestaurantLogin/RestaurantLogin'


class WelcomePage extends Component {
  
    constructor(){
        super();
        this.state = {
            userLogIn:"homepage"
        }
    }

  render() {
    return (
        
      <div>
          {
        this.state.userLogIn === "homepage"?
        <div className="container-fluid WelcomeScreen">
          <div id="innerdiv">
            <h1>Go Eats</h1>
            <img src={logo} />
            <h4>Log In as </h4>
            <button className="button" id="userbtn" onClick={() => this.setState({userLogIn:"User"})}>
              <h5>User</h5>
            </button>
            <button className="button" id="restbtn" onClick={() => this.setState({userLogIn:"Restaurant"})}>
              <h5>Restaurant</h5>
            </button>
          </div> 
        </div>
          : this.state.userLogIn === "User"?
           <UserLoginPage/>
          :
          <RestaurantLoginPage/>
         }
      </div>
    );
  }
}
export default WelcomePage;
