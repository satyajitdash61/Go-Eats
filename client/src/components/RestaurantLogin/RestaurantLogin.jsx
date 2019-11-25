import React, { Component } from "react";
import "./RestaurantLogin.css";
class RestaurantLoginPage extends Component {
  render() {
    return (
      <div className="container-fluid mainscreen">
       <div id="goeats">
       <span id="Go">Go </span><span id="Eats">Eats</span><br/><br/>
       </div>
       <div id="inputarea">
            <h2>Welcome Restaurant</h2><br/>
            <p id="info">Sign in with your id and password.</p>
            <input type="text" name="id" id="id" placeholder="User Id"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <button id="btn2">Sign in</button>
       </div>
       <div id="footer1">
          <p>&#169; 2019 Go Eats Inc.</p>
      </div>
      </div>
    );
  }
}

export default RestaurantLoginPage;
