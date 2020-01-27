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
                                    <li><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                    <li><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>
                                                
                              </ul>
                  </div>
            )
      }
}

export default HomeHeader;