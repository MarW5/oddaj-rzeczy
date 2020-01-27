import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';
import decSvg from '../assets/assets/Decoration.svg'


class LogOut extends Component{
      
      render(){
            return(
                  <>
                        <div className="Home_Banner_LoggScreen">
                                    <HomeHeader/>
                        </div>
                        <div className="LogOut">
                              <h2>Wylogowanie nastapiło pomyślnie!</h2>
                              <span><img alt="decoration line" src={decSvg}/></span>
                              <a href= "/">Strona główna</a>
                              
                        </div>
                  
                  </>
            )
      }
}

export default LogOut;
