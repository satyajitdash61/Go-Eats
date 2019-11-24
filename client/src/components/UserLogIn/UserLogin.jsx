import React, { Component } from "react";
import "./Userlogin.css";
import navlogo from "../../images/navlogo.png";
import goodfood from "../../images/goodfood.png";
import recipe from "../../images/recipe.png";
import takeaway from "../../images/take_away.png"

class UserLoginPage extends Component {
  render() {
    return (
        <div>
      <div className="container-fluid main">
        <nav>
          <img src={navlogo} alt="" id="navlogo"/>
          <ul>
            <li id="sign-in-button">Sign in</li>
          </ul>
        </nav>
        <div id="tagline">
            <span id="go">Go </span><span id="eats">Eats</span><br/><br/>
            <span id="hunger">Hunger ?</span><br/>
            <span id="tag">Want to enjoy your Food?</span> <br/>
            <span id="tag1">Just GoEats it !</span>
        </div>
      </div>
      <div id="service">
          <span id="service_style">Our Services</span>
      </div>
      <div className="characteristics">
        <div id="quality_foods">
            <img src={goodfood} alt="" id="goodfood"/>
            <h5>Quality Foods</h5>
        </div>
        <div id="original_recipes">
        <img src={recipe} alt="" id="recipe"/>
            <h5>Good Recipe</h5>
        </div>
        <div id="delivery">
        <img src={takeaway} alt="" id="takeaway"/>
            <h5>Take Away</h5>
        </div>
      </div>
      <div id="footer">
          <p>&#169; 2019 Go Eats Inc.</p>
      </div>
      </div>
      
    );
  }
}
export default UserLoginPage;
