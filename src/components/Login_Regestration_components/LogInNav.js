import React, { Component } from 'react';
import { Link as ScrollLink} from 'react-scroll'
import {Link,  NavLink, } from 'react-router-dom';
import decSvg from '../../assets/assets/Decoration.svg'
import myFirebase from "../../Firebase/fbconfig"
import { isMobile } from 'react-device-detect'
import menuHamburger from '../../assets/assets/menu.svg'
import crossMenu from '../../assets/assets/cross_menu.svg'

class LogInNav extends Component{
      constructor(props){
            super(props)
            this.state={
                  mobile : false,
            }
      }

      hamburgerMenu = e =>{
            this.setState({
                  mobile: !this.state.mobile
            })
      }

      clickLink = e =>{
            this.setState({
                  mobile: !this.state.mobile
            })
      }

      logout(){
            myFirebase.auth().signOut();
      }


      render(){
            const activeStyle = {
                  border:'1px solid $color4'
            };
           
           if(isMobile){
                 return(
                  <nav className="Home_Header">                       
                        <div className="Header_menu_banner">
                              <div className="Header_menu">
                              {!this.state.mobile ? <span className ="hamburger_menu" onClick = {this.hamburgerMenu}><img src= {menuHamburger} alt="menu_hamburger"/></span> :  <span className="cross_menu" onClick= {this.hamburgerMenu}><img src= {crossMenu} alt="menu_cross"/></span>}
                                    <ul className="Header_logg_option">
                                          <li className="User_email"><p >Cześć {this.props.user}</p></li>
                                          <li><Link to="/oddaj-rzeczy">ODDAJ RZECZY</Link></li>
                                          <li onClick={this.logout}><Link to="/wylogowano">Wyloguj</Link></li>
                                    </ul>
            
                                    {this.state.mobile ? <ul className=" Header_menu_nav mobile_menu">
                                                <li onClick= {this.clickLink} className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                                <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                                <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                                <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="HelpPeople" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                                <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>
                                                            
                                          </ul> : null}
                              </div>
                              <div className="Header_menu_title">                                      
                                    <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                                    <span className="border_decoration"><img alt="decoration line" src={decSvg}/></span>
                                    
                                    <div className="Header_menu_buttons">
                                          <a href="/oddaj-rzeczy"><p>ODDAJ RZECZY</p></a>
                                          <a href="/oddaj-rzeczy"><p>ZORGANIZUJ ZBIÓRKĘ</p></a>
                                    </div>
                              </div>
                        </div>
                  </nav>
                 )
           }else{
                  return(
                        <nav className="Home_Header">
                                          
                              <div className="Header_background"></div>
                                           
                              <div className="Header_menu_banner">
                              <div className="Header_menu">
                                          <ul className="Header_logg_option">
                                                <li className="User_email"><p >Cześć {this.props.user}</p></li>
                                                <li><Link to="/oddaj-rzeczy">ODDAJ RZECZY</Link></li>
                                                <li onClick={this.logout}><Link to="/wylogowano">Wyloguj</Link></li>
                                          </ul>
                  
                                                <ul className=" Header_menu_nav">
                                                      <li><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                                      <li><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                                      <li><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                                      <li><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                                      <li><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>
                                                                  
                                                </ul>
                                    </div>
                                    <div className="Header_menu_title">                                      
                                          <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                                          <span className="border_decoration"><img alt="decoration line" src={decSvg}/></span>
                                          
                                          <div className="Header_menu_buttons">
                                                <a href="/oddaj-rzeczy"><p>ODDAJ RZECZY</p></a>
                                                <a href="/oddaj-rzeczy"><p>ZORGANIZUJ ZBIÓRKĘ</p></a>
                                          </div>
                                    </div>
                              </div>
                        
                        </nav> 
                        )
           }
           
           
            
      }
      
}

export default LogInNav;