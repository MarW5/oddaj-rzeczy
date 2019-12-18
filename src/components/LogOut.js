import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';
import decSvg from '../assets/assets/Decoration.svg'


class LogOut extends Component{
      render(){
            return(
                  <>
                        <HomeHeader/>
                        <div className="LogOut">
                              <h2>Wylogowanie nastapiło pomyślnie!</h2>
                              <span><img src={decSvg}/></span>
                              <a href= "/">Strona główna</a>
                        </div>
                  
                  </>
            )
      }
}

export default LogOut;
