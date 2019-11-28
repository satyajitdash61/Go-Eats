import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() { 
        return ( 
            <div id="item_div">
               <div id="Item_pic">
                   <h1>{this.props.name}</h1>
                   </div> 
            </div>
         );
    }
}
 
export default Item;