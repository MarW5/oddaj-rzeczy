import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import {
      BrowserRouter,
      Route,
      Link,
      Switch,
      NavLink,
      } from 'react-router-dom';
class HomeHeader extends Component{
      
      render(){
            const activeStyle = {
                  border:'1px solid $color4'
            };
            return (
                  <nav className="Home_Header">
                        <div className="Header_background"></div>
                        <div className="Header_menu">
                                    <ul className="Header_logg_option">
                                    <Link to="/logowanie"><li>Zaloguj</li></Link>
                                    <Link to="/rejestracja"> <li>Załóż konto</li></Link>
                                    </ul>
                              
                                    <ul className="Header_logg_option Header_menu_nav">
                                    <NavLink exact to="/" activeStyle={activeStyle}><li>Start</li></NavLink>
                                          <li>O co chodzi?</li>
                                          <li>O nas</li>
                                          <li>Fundacja i organizacje</li>
                                          <li>Kontakt</li>
                                          
                                    </ul>

                                    <div className="Header_menu_banner">
                                          <div className="Header_menu_title">                                      
                                                <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                                                <span className="border_decoration"><img src={decSvg}/></span>
                                          </div>
                                          <div className="Header_menu_buttons">
                                                <a href="#">ODDAJ RZECZY</a>
                                                <a href="#">ZORGANIZUJ ZBIÓRKĘ</a>
                                          </div>
                                    </div>
                        </div>
                        </nav>
            )
           
            
            

            
      }
}

export default HomeHeader;