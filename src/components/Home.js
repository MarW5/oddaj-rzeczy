import React, { Component } from 'react';
import HomeHeader from "./HomeHeader"
import HomeThreeColumns from "./HomeTreeColumns"
import FourSteps from "./FourSteps"

class Home extends Component{
      render(){
            return(
                  <div className="Home_General">
                        <HomeHeader/>
                        <HomeThreeColumns/>
                        <FourSteps/>
                  </div>
            )
      }
}






export default Home;