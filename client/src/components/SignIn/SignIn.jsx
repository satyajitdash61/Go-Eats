import React, { Component } from 'react';
import './SignIn.css';
import SignUp from '../SignUp/SignUp';
import { Redirect }  from 'react-router-dom';
import axios from 'axios';
 class SignIn extends Component {
constructor(){
    super();
    const token = localStorage.getItem('token')

        let loggedin = true
        if(token == null){
            loggedin = false
        }
    this.state = {
        id:"",
        password:"",
        page1: "thispage",
        loggedin
    };
    
}
    handelChange = event => {
        const{name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = e =>{
        e.preventDefault() 
        const { id,password}=this.state;

        axios.post('http://localhost:8300/user/login',{id,password})
            .then(response => {
                console.log(response)
            })
        
        // if(id==='A' && password==="B"){
        //     localStorage.setItem('token',"jvghgjvhg")
        //     this.setState({
        //         loggedin : true
        //     })
        // }

        
    }
     render() { 
         if(this.state.loggedin){
             return <Redirect to="/home"/>
         }
         const {id,password} = this.state;
         return ( 
             <div>
                 {this.state.page1 === "thispage" ? (
            <div className="container-fluid mainscreen1">
            <div id="goeats1">
            <span id="Go1">Go </span><span id="Eats1">Eats</span><br/><br/>
            </div>
            <div id="inputarea1">
                 <h2>Welcome User</h2><br/>
                 <p id="info1">Sign in with your id and password.</p>
                 <input type="text" name="id" value={id} onChange={this.handelChange} id="id1" placeholder="User Id"/>
                 <input type="password" name="password" value={password} onChange={this.handelChange} id="password1" placeholder="Password"/>
                 <button id="btn3" onClick={this.handleSubmit}>Sign in</button>
                 <div id="box1">
                 <p id="no_acc">Do not have an account? <span id="signuplink" onClick={()=>this.setState({page1:"thatpage"})}>Sign Up</span></p>
                 
                 </div>
            </div>
            <div id="footer2">
               <p>&#169; 2019 Go Eats Inc.</p>
           </div>
           </div>
           ):(
               <SignUp/>
           )}
           </div>
          );
     }
 }
  
 export default SignIn;