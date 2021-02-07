import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import {Link, NavLink, } from 'react-router-dom';
import decSvg from '../../assets/assets/Decoration.svg'
import myFirebase from "../../Firebase/fbconfig"
import { isMobile } from 'react-device-detect'
import menuHamburger from '../../assets/assets/menu.svg'
import crossMenu from '../../assets/assets/cross_menu.svg'

class Form_Header extends Component{
      constructor(props) {
            super(props);
            this.logout = this.logout.bind(this);
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

      logout() {
            myFirebase.auth().signOut();
        }

      render(){
            const activeStyle = {
                  border:'1px solid $color4'
            };

            if(isMobile){
                  return(
                        <nav className="Home_Header">                                                            
                              <div className="Header_form_banner">
                                    <div className="Header_menu ">
                                    {!this.state.mobile ? <span className ="hamburger_menu" onClick = {this.hamburgerMenu}><img src= {menuHamburger} alt="menu_hamburger"/></span> :  <span className="cross_menu" onClick= {this.hamburgerMenu}><img src= {crossMenu} alt="menu_cross"/></span>}
                                                <ul className="Header_logg_option">
                                                      <li className="User_email"><p> Cześć {this.props.user}</p></li>     
                                                </ul>
                                                {this.state.mobile ? <ul className=" Header_menu_nav mobile_menu">
                                                            <li onClick= {this.clickLink} className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                                            {/* <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                                            <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                                            <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="Form_Window" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                                            <li className="menu_nav_link"><ScrollLink activeClass="active" onClick= {this.clickLink} to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>                  */}
                                                            <li><Link to="/oddaj-rzeczy" className="menu_nav_link">ODDAJ RZECZY</Link></li>
                                                            <li onClick={this.logout}><Link to="/wylogowano" className="menu_nav_link">Wyloguj</Link></li>     
                                                      </ul> : null}
                                    </div>
                                    <div className="Header_form">                                      
                                          <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                                          <span className="border_decoration"><img src={decSvg}/></span>
                                          
                                          <div className="Header_4Steps">
                                                <p>Wystarczą 4 proste kroki:</p>
                                                <ul className= "Steps_box">
                                                      <li><span className="number_steps">1</span> <p>Wybierz rzeczy</p></li>
                                                      <li><span className="number_steps">2</span><p>Spakuj je</p></li>
                                                      <li><span className="number_steps">3</span><p>Wybierz fundację</p></li>
                                                      <li><span className="number_steps">4</span><p>Zamów kuriera</p></li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                  </nav>
                  )
            }else {
                  return(
                        <nav className="Home_Header">                        
                              <div className="Banner_background"></div>         
                              <div className="Header_form_banner">
                                    <div className="Header_menu ">
                                                <ul className="Header_logg_option">
                                                      <li className="User_email"><p> Cześć {this.props.user}</p></li>
                                                      <li><Link to="/oddaj-rzeczy">ODDAJ RZECZY</Link></li>
                                                      <li onClick={this.logout}><Link to="/wylogowano">Wyloguj</Link></li>
                                                </ul>
                                                <ul className=" Header_menu_nav">
                                                      <li className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle}>Start</NavLink></li>
                                                      <li className="menu_nav_link"><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                                                      <li className="menu_nav_link"><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink></li>
                                                      <li className="menu_nav_link"><ScrollLink activeClass="active" to="Form_Window" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                                      <li className="menu_nav_link"><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>                  
                                                </ul>
                                    </div>
                                    <div className="Header_form">                                      
                                          <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                                          <span className="border_decoration"><img src={decSvg}/></span>
                                          <div className="Header_4Steps">
                                                <p>Wystarczą 4 proste kroki:</p>
                                                <ul className= "Steps_box">
                                                      <li><span className="number_steps">1</span> <p>Wybierz rzeczy</p></li>
                                                      <li><span className="number_steps">2</span><p>Spakuj je</p></li>
                                                      <li><span className="number_steps">3</span><p>Wybierz fundację</p></li>
                                                      <li><span className="number_steps">4</span><p>Zamów kuriera</p></li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </nav>
                        )
            }        
      }
      
}

export default Form_Header;