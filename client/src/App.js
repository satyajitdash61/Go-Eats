import React from 'react';
import Welcome from './components/UserLogIn/UserLogin'
import SignIn from './components/SignIn/SignIn'
import './App.css';
import { Route,Switch,Redirect }from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"component ={Welcome}/>
        <Route exact path="/signin"component ={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
