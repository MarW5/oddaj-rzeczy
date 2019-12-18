import React, { Component } from 'react';
import Home from './components/Home';
import LoggScreen from './components/LoggScreen';
import ReggScreen from './components/ReggScreen';
import LoggIn from "./components/LoggIn";
import LogOut from "./components/LogOut";
import './scss/main.scss';
import {Route, Link, Switch, NavLink, Router, BrowserRouter,
  } from 'react-router-dom';


class App extends Component{
  render(){
   
    return(     
                    <BrowserRouter>
                      <>
                          <Route exact path="/" component={Home}/>

                          <Switch>
                              <Route path ='/logowanie'>
                                <LoggScreen />
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

                              
                          </Switch>
                      </>
                    </BrowserRouter>             
    )
  }
}


export default App;
