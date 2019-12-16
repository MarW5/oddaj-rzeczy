import React, { Component } from 'react';

import HomeHeader from "./Home_components/HomeHeader"
import HomeBanner from "./Home_components/HomeBanner"
import HomeThreeColumns from "./Home_components/HomeTreeColumns"
import FourSteps from "./Home_components/FourSteps"
import AboutUs from "./Home_components/AboutUs"
import HelpPeople from "./Home_components/HelpPeople"
import Contact from "./Home_components/Contact"


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
                        
                  </>
            )
      }
}






export default Home;