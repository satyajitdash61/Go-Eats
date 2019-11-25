import React, { Component } from 'react';
import './SignUp.css';
import SignIn from "../SignIn/SignIn";

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            page1: "thispage"
        };
    }
    render() { 
        return ( 
            <div>
                 {this.state.page1 === "thispage" ? (
            <div className="container-fluid mainscreen2">
            <div id="goeats2">
            <span id="Go2">Go </span><span id="Eats2">Eats</span><br/><br/>
            </div>
            <div id="inputarea2">
                 <h2>Welcome User</h2><br/>
                 <p id="info2">Sign Up with id and password.</p>
                 <input type="text" name="id2" id="id2" placeholder="User Id"/>
                 <input type="password" name="password2" id="password2" placeholder="Password"/>
                 <input type="password" name="password2" id="confirm_password2" placeholder="Confirm Password"/>
                 <button id="btn4">Sign in</button>
                 <div id="box2">
                 <p id="no_acc1">Already have an account? <span id="signuplink1" onClick={()=>this.setState({page1:"thatpage"})}>Sign in</span></p>
                 
                 </div>
            </div>
            <div id="footer3">
               <p>&#169; 2019 Go Eats Inc.</p>
               </div>
           </div>
           ):(
               <SignIn/>
           )}
           </div>
          );
     }
 }
 
export default SignUp;