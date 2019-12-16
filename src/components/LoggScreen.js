import React, { Component } from 'react';
import decSvg from '../assets/assets/Decoration.svg'
import HomeHeader from './Home_components/HomeHeader';



class LoggScreen extends Component{
      state={
            isLogged: false,
            email:"",
            password:"",
            errors: [],
            user: null
      };

      handleChange= e =>{
            this.setState({
                  [e.target.name]: e.target.value
                  });
      };

      handleFormSubmit= e =>{
            e.preventDefault();
            const{email, password}= this.state;
            const errors = [];
            if(email.length <5){
                  errors.push("Podany email jest nieprawidłowy")
            }
            if(password.length < 5){
                  errors.push("Podane hasło jest za krótkie")
            }
            if(errors.length >0){
                  this.setState({
                        errors,
                        isLogged:false
                  })
                  return false;
            }
      }

      render(){
            return (
                  <>
                  <HomeHeader/>
                  <div className="Logg_Form">
                        <h2>Zaloguj się</h2>
                        <span><img alt="decoration icon" src={decSvg}/></span>
                        <div className="Logg_Form_date">
                              <p>Email</p>
                              <input type={"email"} name={"email"} value={this.state.email} onChange={this.handleChange}/>
                              <div>{this.state.errorEmail}</div>
                              <p>Hasło</p>
                              <input type={"password"} name={"password"}/>

                        </div>
                        <div className="Logg_Form_btn">
                              <a href="/rejestracja">Załóż konto</a>
                              <a href="/user" onChange={this.handleFormSubmit}>Zaloguj się</a>
                        </div>
                  </div>
                </>
            )
      }
}









export default LoggScreen;