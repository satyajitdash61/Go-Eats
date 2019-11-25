import React, { Component } from 'react';
import './SignIn.css';
 class SignIn extends Component {


     render() { 
         return ( 
            <div className="container-fluid mainscreen1">
            <div id="goeats1">
            <span id="Go1">Go </span><span id="Eats1">Eats</span><br/><br/>
            </div>
            <div id="inputarea1">
                 <h2>Welcome Back</h2><br/>
                 <p id="info1">Sign in with your id and password.</p>
                 <input type="text" name="id1" id="id1" placeholder="User Id"/>
                 <input type="password" name="password1" id="password1" placeholder="Password"/>
                 <button id="btn3">Sign in</button>
                 <div id="box1">
                 <p id="no_acc">Do not have an account? <span id="signuplink" onClick>Sign Up</span></p>
                 
                 </div>
            </div>
            <div id="footer2">
               <p>&#169; 2019 Go Eats Inc.</p>
           </div>
           </div>
            
          );
     }
 }
  
 export default SignIn;