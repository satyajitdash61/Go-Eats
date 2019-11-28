import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('token')

        let loggedin = true
        if(token == null){
            loggedin = false
        }

        this.state = {
            loggedin
        }
    }
    render() { 
        if(this.state.loggedin=== false){
            return <Redirect to = '/'/>
        }
        return ( 
            <div>
                <h1>U are authorized</h1>
                <Link to="/logout">Log Out</Link>
            </div>
         );
    }
}
 
export default Home;