import React, { Component } from 'react';
import decSvg from '../assets/assets/Decoration.svg'
import HomeHeader from './Home_components/HomeHeader';


class ReggScreen extends Component{
      render(){
            return (
                  <>
                  <HomeHeader/>
                  <div className="Reg_Form">
                        <h2>Załóż konto</h2>
                        <span><img alt="decoration icon" src={decSvg}/></span>
                        <div className="Reg_Form_date"> 
                              <p>Email</p>
                              <input type={"email"} name={"email"}/>
                              <p>Hasło</p>
                              <input type={"password"} name={"password"}/>
                              <p>Powtórz Hasło</p>
                              <input type={"password"} name={"password"}/>

                        </div>
                        <div className="Reg_Form_btn">
                              <a href="/rejestracja">Załóż konto</a>
                              <a href="/logowanie">Zaloguj się</a>
                        </div>

                  </div>
                  </>
            )
      }
}
export default ReggScreen;