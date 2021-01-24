import React, { Component } from 'react';

import HomeBanner from "./Home_components/HomeBanner"
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"
import Footer from "./Home_components/Footer"


class Home extends Component{
      render(){
            return(
                  <>
                        <HomeBanner/>
                        <HomeThreeColumns/>
                        <FourSteps/>
                        <AboutUs/>
                        <HelpPeople/>
                        <Contact/>
                        <Footer/>
                        
                  </>
            )
      }
}






export default Home;