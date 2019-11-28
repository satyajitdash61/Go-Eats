import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div id="item_div">
        <div id="Item_pic">
          <img src={this.props.name.image} alt="" id="item_img" />
          
          <h5 style={{color:"black"}}>{this.props.name.name}</h5>
          
          <p style={{color:"black"}}>{this.props.name.price}</p>
          <div id="Item_info">
              <button style={{margin:"13px"}}>-</button>
              <p style={{color:"black"}}>0</p>
              <button style={{margin:"13px"}}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
