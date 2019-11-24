import React, { Component } from 'react';
import './RestaurantLogin.css';
import restaurantpic from '../../images/cherry-delivery.png'
class RestaurantLoginPage extends Component {
    render() { 
        return ( 
            <div className="mainscreen">
                <div id="leftside">
                <img src={restaurantpic} alt="" id="restaurantpic"/>
                </div>
                <div id="rightside">
                    
                </div>
            </div>
         );
    }
}
 
export default RestaurantLoginPage;