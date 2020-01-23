import React, { Component } from 'react';
import LogInNav from './Login_Regestration_components/LogInNav';
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"
import Form_header from "./Form_components/Form_header"



class LoggIn extends Component{
  render(){
    
    return (
      <>
          <Form_header/>
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