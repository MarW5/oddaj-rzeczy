import React, { Component } from 'react';
import { Link as ScrollLink} from 'react-scroll'
import {Link, NavLink, } from 'react-router-dom';


class HomeHeader extends Component{
      
      render(){
            const activeStyle = {
                  border:'1px solid $color4'
            };
            return(
                  <div className="Header_menu">
                        <ul className="Header_logg_option">
                              <li><Link to="/logowanie">Zaloguj</Link></li>
                              <li><Link to="/rejestracja">Załóż konto</Link></li>
                        </ul>

                              <ul className=" Header_menu_nav">
                                    <li className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle} className="nav_link_menu">Start</NavLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500} className="nav_link_menu">O co chodzi?</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500} className="nav_link_menu">O nas</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500} className="nav_link_menu">Fundacja i organizacje</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500} className="nav_link_menu">Kontakt</ScrollLink></li>
                                                
                              </ul>
                  </div>
            )
      }
}

export default HomeHeader;