import React, { Component } from 'react';
import LogInNav from './Login_Regestration_components/LogInNav';
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"




class LoggIn extends Component{
  render(){
    
    return (
      <>
          <LogInNav user={this.props.user}/>
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