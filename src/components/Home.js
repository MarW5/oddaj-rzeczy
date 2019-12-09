import React, { Component } from 'react';
import HomeHeader from "./HomeHeader"
import HomeThreeColumns from "./HomeTreeColumns"

class Home extends Component{
      render(){
            return(
                  <div className="Home_General">
                        <HomeHeader/>
                        <HomeThreeColumns/>
                  </div>
            )
      }
}






export default Home;