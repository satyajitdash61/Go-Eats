import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() { 
        return ( 
            <div id="item_div">
               <div id="Item_pic">
                   <img src={this.props.name} alt="" id="item_img"/>
                   </div> 
            </div>
         );
    }
}
 
export default Item;