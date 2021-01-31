import React, { Component } from 'react';
import { Link as ScrollLink} from 'react-scroll'
import {Link, NavLink, } from 'react-router-dom';
import { isMobile } from 'react-device-detect'
import menuHamburger from '../../assets/assets/menu.svg'


class HomeHeader extends Component{
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
      render(){
            console.log(!this.state.mobile)
            const activeStyle = {
                  border:'1px solid $color4'
            };
            if(isMobile){
                  return(
                        <div className="Header_menu">
                              <span className ="hamburger_menu" onClick = {this.hamburgerMenu}><img src= {menuHamburger} alt="menu_hamburger"/></span>
                              <ul className="Header_logg_option">
                                    <li><Link to="/logowanie">Zaloguj</Link></li>
                                    <li><Link to="/rejestracja">Załóż konto</Link></li>
                              </ul>
                              {this.state.mobile ? <ul className=" Header_menu_nav mobile_menu">
                                    <li className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle} className="nav_link_menu">Start</NavLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500} className="nav_link_menu">O co chodzi?</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500} className="nav_link_menu">O nas</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500} className="nav_link_menu">Fundacja i organizacje</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500} className="nav_link_menu">Kontakt</ScrollLink></li>                  
                              </ul> : null}
                        </div>
                  )
            }else {
                     return(
                        <div className="Header_menu">
                              <ul className="Header_logg_option">
                                    <li><Link to="/logowanie">Zaloguj</Link></li>
                                    <li><Link to="/rejestracja">Załóż konto</Link></li>
                              </ul>
                              <ul className=" Header_menu_nav">
                                    <li className="menu_nav_link"><NavLink exact to="/" activeStyle={activeStyle} className="nav_link_menu">Start</NavLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="FourSteps" spy={true} smooth={true} duration={500} className="nav_link_menu">O co chodzi?</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="AboutUs" spy={true} smooth={true} duration={500} className="nav_link_menu">O nas</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="HelpPeople" spy={true} smooth={true} duration={500} className="nav_link_menu">Fundacja i organizacje</ScrollLink></li>
                                    <li className="menu_nav_link"><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} duration={500} className="nav_link_menu">Kontakt</ScrollLink></li>          
                              </ul>
                         </div>
                              
                    
                  )
            }
            
      }
}

export default HomeHeader;