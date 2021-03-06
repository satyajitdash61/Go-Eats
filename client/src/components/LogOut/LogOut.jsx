import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./LogOut.css";

class LogOut extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem('token');
    }
    render() { 
        return ( 
            <div id="logoutpage">
                <h1>You Have Been Logged Out</h1>
                <Link to="/">Login Again</Link>
            </div>
         );
    }
}
 
export default LogOut;