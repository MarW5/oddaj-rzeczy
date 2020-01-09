import React, { Component } from 'react';
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link, Route, NavLink, } from 'react-router-dom';
import decSvg from '../../assets/assets/Decoration.svg'

class Form_Header extends Component{
      render(){
            const activeStyle = {
                  border:'1px solid $color4'
            };
            return(
      <nav className="Home_Header">
                        
            <div className="Banner_background"></div>
                         
            <div className="Header_form_banner">
            <div className="Header_menu">
                        <ul className="Header_logg_option">
                              <li><p className="User_email">Cześć krzysztof@gmail.com</p></li>
                              <a href="/oddaj-rzeczy"><p>ODDAJ RZECZY</p></a>
                              <li><Link to="/wylogowano">Wyloguj</Link></li>
                        </ul>

                              <ul className="Header_logg_option Header_menu_nav">
                                    <li><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                    <li><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                    <li><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>
                                                
                              </ul>
                  </div>
                  <div className="Header_form">                                      
                        <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                        <span className="border_decoration"><img src={decSvg}/></span>
                        
                        <div className="Header_4Steps">
                              <p>Wystarczą 4 proste kroki:</p>
                              <ul className= "Steps_box">
                                    <li><p>1 Wybierz rzeczy</p></li>
                                    <li><p>2 Spakuj je</p></li>
                                    <li><p>3 Wybierz fundację</p></li>
                                    <li><p>4 Zamów kuriera</p></li>
                              </ul>
                        </div>
                  </div>
            </div>
      
      </nav>
                  
                  
          
            )
      }
      
}

export default Form_Header;