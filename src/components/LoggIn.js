import React, { Component } from 'react';
import LogInNav from './LogInNav';
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"




class LoggIn extends Component{
  render(){
    
    return (
      <>
          <LogInNav/>
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