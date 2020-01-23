import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from '../Home_components/HomeHeader';

import myFirebase from "../../Firebase/fbconfig"
import FormScreen from "../Form_components/FormScreen"
import {Redirect} from 'react-router-dom';
import LoggIn from '../LoggIn';


class LoggScreen extends Component{
      state={
            email: "",
            password:"", 
            error:"" ,
            isTrue: false         
            
      };

      handleChange= e =>{
            this.setState({
                  [e.target.name]: e.target.value
                  });
      };


      handleFormSubmit= e =>{
            e.preventDefault();
            myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u)=>{ console.log("zalogowano") 
            this.setState({
                  error: " ",
                  isTrue: true  
            })
            }).catch((error) => {
                  this.setState({
                        error: "Niepoprawny e-mail lub hasło" ,
                        isTrue: false 
                  })
                console.log(error);
              });

              
           
      };


      render(){
            if(this.state.isTrue === true){
                  return <LoggIn user={this.state.email}/>
            }else{
            
                  return(
                        <>    <div className="Home_Banner_LoggScreen">
                              <HomeHeader/>
                              </div>
                                    <div className="Logg_Form">
                                          <h2>Zaloguj się</h2>
                                          <span><img alt="decoration icon" src={decSvg}/></span>
                                          <div className="Logg_Form_date">
                                                <p>Email</p>
                                                <input type={"email"} name={"email"} onChange={this.handleChange} value={this.state.email}/>
                                                <p>Hasło</p>
                                                <input type={"password"} name={"password"} id="password" onChange={this.handleChange} value={this.state.password}/>
                                                <p className= "Error_msg_logg" >{this.state.error}</p>
                                    </div>
                                    
                                          <div className="Logg_Form_btn">
                                                <a href="/rejestracja">Załóż konto</a>
                                                <a  onClick={this.handleFormSubmit} href="/oddaj-rzeczy">Zaloguj się</a>
                                          </div>
                                    </div>    
                        </>
                  )
             
            }
                  
      }
}                  

    export default LoggScreen;

