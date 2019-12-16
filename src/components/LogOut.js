import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';


class LogOut extends Component{
      render(){
            return(
                  <div>
                        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                        <span><img alt="decoration icon" src={decSvg}/></span>
                        <a href="/">Strona Główna</a>
                  </div>
            )
      }
}