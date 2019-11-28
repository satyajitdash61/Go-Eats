import React, { Component } from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar'
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
                <div className="container-fluid home">
                <NavBar/>
                <h1>U are authorized</h1>
                </div>
            </div>
         );
    }
}
 
export default Home;