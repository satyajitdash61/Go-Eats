import React, { Component } from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import Item from '../../components/Item/Item'
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
        const name = ['satyajit','Gokul','varun'];
        let arr = name.map(n =><Item name={n}/>)
        if(this.state.loggedin=== false){
            return <Redirect to = '/'/>
        }
        return ( 
            <div>
                <div className="container-fluid home">
                <NavBar/>
                <div id="Items_show">
                <h3>POPULAR MENU ITEMS</h3>
                    {
                        arr
                    }
                </div>
                </div>
            </div>
         );
    }
}
 
export default Home;