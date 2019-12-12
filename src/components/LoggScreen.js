import React, { Component } from 'react';
import '../scss/main.scss';
import decSvg from '../assets/assets/Decoration.svg'



class LoggScreen extends Component{
      render(){
            return (
                <div className="Logg_Form">
                      <h2>Zaloguj się</h2><span><img src={decSvg}/></span>
                      <form>
                            Imię:
                            <input type={"email"} name={"email"}/>
                            Hasło:
                            <input type={"password"} name={"password"}/>

                      </form>
                      <div><a>Załóż konto</a><button>Zaloguj się</button></div>
                </div>
            )
      }
}









export default LoggScreen;