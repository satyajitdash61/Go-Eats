import React, { Component } from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import Item from '../../components/Item/Item'
import item1 from '../../images/item1.jpg';
import item2 from '../../images/item2.jpg';
import item3 from '../../images/item3.jpg';
import item4 from '../../images/item4.jpg';
import item5 from '../../images/item5.jpg';
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
        const name = [item1,item2,item3,item4];
        let arr = name.map(n =><Item name={n}/>)
        if(this.state.loggedin=== false){
            return <Redirect to = '/'/>
        }
        return ( 
            <div>
                <div className="container-fluid home">
                <NavBar/>
                <div id="Items_show">
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