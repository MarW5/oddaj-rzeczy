import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from "../Home_components/HomeHeader"

class HomeBanner extends Component{
      
      render(){
            
            return (
                  <nav className="Home_Header">
                        
                        <div className="Header_background"></div>
                                     
                        <div className="Header_menu_banner">
                              <HomeHeader/>
                              <div className="Header_menu_title">                                      
                                    <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                                    <span className="border_decoration"><img src={decSvg}/></span>
                                    
                                    <div className="Header_menu_buttons">
                                          <a href="/logowanie"><p>ODDAJ RZECZY</p></a>
                                          <a href="/logowanie"><p>ZORGANIZUJ ZBIÓRKĘ</p></a>
                                    </div>
                              </div>
                        </div>
                  
                  </nav>
            )
           
            
            

            
      }
}

export default HomeBanner;