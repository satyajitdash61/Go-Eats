import React, { Component } from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import Item from '../../components/Item/Item'
import item1 from '../../images/item1.jpg';
import item2 from '../../images/item2.jpg';
import item3 from '../../images/item3.jpg';
import item4 from '../../images/item4.jpg';
import item5 from '../../images/item5.jpg';
import video from '../../images/Food Menu Presentation After Effects Template.mp4';
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
            loggedin,
            name : [
                {id:1,image : item1, name : "Baby corn" , price : 250,count:0},
                {id:2,image : item2, name : "Fisy fry" , price : 260,count:0},
                {id:3,image : item3, name : "Chicken Roll" , price : 270,count:0},
                {id:4,image : item4, name : "Chicken periferry" , price : 280,count:0},
                {id:5,image : item5, name : "Butter Chicken" , price : 290,count:0},
            ]
        }
    }

    increment = (event)=>{
      this.state.name[event].count = this.state.name[event].count + 1;
      console.log(this.state.name[event])
    }

    render() { 

        let arr = this.state.name.map(n =><Item id={n.id} name={n} count={n.count} increment={this.increment}/>)
        if(this.state.loggedin=== false){
            return <Redirect to = '/'/>
        }
        return ( 
            
            
            <div>
                <div className="container-fluid home">
                <NavBar/>
                    <video src={video} autoPlay loop muted id="video"></video>
                </div>
                <div id="Items_show_parent">
                <h2>Popular Items</h2>
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