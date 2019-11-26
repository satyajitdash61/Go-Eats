import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LogOut extends Component {
    render() { 
        return ( 
            <div>
                <h1>You Have Been Logged Out</h1>
                <Link to="/">Login Again</Link>
            </div>
         );
    }
}
 
export default LogOut;