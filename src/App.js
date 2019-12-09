import React, { Component } from 'react';
import Home from './components/Home';
import LoggScreen from './components/LoggScreen';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  } from 'react-router-dom';
import { homedir } from 'os';

class App extends Component{
  render(){
   
    return(
    
        <HashRouter>
                        <>
                            <Route extact path="/" component={Home} />
                            <Switch>
                              <Route path ='/logowanie' component={LoggScreen}/>
                            </Switch>
                        </>
                        
        </HashRouter>

    )
  }
}


export default App;
