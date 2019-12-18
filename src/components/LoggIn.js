import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';
import HomeBanner from "./Home_components/HomeBanner"
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link, Route, NavLink, } from 'react-router-dom';




class LoggIn extends Component{
  render(){
    const activeStyle = {
      border:'1px solid $color4'
};
    return (
      <>
           <div className="Header_menu">
                        <ul className="Header_logg_option">
                              <li><p>Cześć krzysztof@gmail.com</p></li>
                              <a href="/logowanie"><p>ODDAJ RZECZY</p></a>
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
          <HomeBanner/>
          <HomeThreeColumns/>
          <FourSteps/>
          <AboutUs/>
          <HelpPeople/>
          <Contact/>

      </>
      )
  }
}


export default LoggIn;