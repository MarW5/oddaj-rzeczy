import React, { Component } from 'react';

import Home from './components/Home';
import LoggScreen from './components/Login_Regestration_components/LoggScreen';
import ReggScreen from './components/Login_Regestration_components/ReggScreen';
import LoggIn from "./components/LoggIn";
import LogOut from "./components/LogOut";
import FormScreen from "./components/Form_components/FormScreen"
import './scss/main.scss';

import {Route, Link, Switch, NavLink, Router, BrowserRouter, Redirect} from 'react-router-dom';

import myFirebase from "./Firebase/fbconfig"



class App extends Component{
  constructor() {
    super();
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
       localStorage.setItem('user', user.uid);
       console.log(user.uid)
      } else {
        this.setState({ user: null });
       localStorage.removeItem('user');
      }
    });
  }

  render(){
    console.log(this.state.user)
    return(     
                <>
                  
                      <BrowserRouter>
                      
                        
                          <Route exact path="/" component={Home} />

                            <Switch>
                                <Route path ='/logowanie'>
                                  <LoggScreen/>
                                  
                                </Route>

                                <Route path ='/rejestracja'>
                                  <ReggScreen/>
                                </Route>
                                
                                <Route path ='/user'>
                                  <LoggIn/>
                                </Route>

                                <Route path ='/wylogowano'>
                                  <LogOut/>
                                </Route>

                                <Route path ='/oddaj-rzeczy'>
                                  <FormScreen user={this.state.user.email}/>
                                  {this.state.user ? (<LoggIn/>) : (<LoggScreen/>)}
                                </Route>
                                  
                            </Switch>
                      
                      </BrowserRouter>  
                    </>           
    )
  }
}



export default App
