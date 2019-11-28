import React from 'react';
import Welcome from './components/UserLogIn/UserLogin'
import SignIn from './components/SignIn/SignIn'
import './App.css';
import { Route,Switch,Redirect }from 'react-router-dom'
import Home from './pages/Home/Home'
import LogOut from './components/LogOut/LogOut'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"component ={Welcome}/>
        <Route path="/signin"component ={SignIn}/>
        <Route path="/home"component ={Home}/>
        <Route path="/logout"component ={LogOut}/>

        
      </Switch>
    </div>
  );
}

export default App;
