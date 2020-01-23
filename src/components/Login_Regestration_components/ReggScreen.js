import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from '../Home_components/HomeHeader';
import myFirebase from "../../Firebase/fbconfig"


class ReggScreen extends Component{
      state={
            email:'',
            password:'',
            secondPassword:'',
            isInvalid: true,
            error_email:[],
            error_password:[]
      }
      
      onSubmitSignUp = e => {
          e.preventDefault();
          myFirebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then((u)=>{console.log(u)  
          })
          .catch((error)=>{
                console.log(error);
          })

        

        const {email, password, secondPassword, isInvalid, error_email, error_password}= this.state;

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        if(this.state.password !== this.state.secondPassword || this.state.password=== "" ){
            this.setState({
                  isInvalid: false
                  
            })
            
            error_password.push("Podane hasła nie są identyczne")

      }if (this.state.email === "" ||validateEmail(this.state.email) === false || this.state.email.length >= 5){
            error_email.push("Podany email jest nieprawidłowy");
            this.setState({
                  isInvalid: false
                  
            })

      }

      
      else if(this.state.password === this.state.secondPassword || this.state.password.length < 5 || validateEmail(this.state.email) === true){
            this.setState({
                  isInvalid: true,
                  error_password: [],
                  error_email: []

            })

      }
      console.log(this.state)
       };

      
        onChangeFormSignUp = e => {
            this.setState({ 
                  [e.target.name]: e.target.value 
                    
            });
            console.log(this.state.email)
      }
           
          
      render(){
            return (
                  <>
                        <HomeHeader/>
                              <div className="Reg_Form">
                                    <h2>Załóż konto</h2>
                                    <span><img alt="decoration icon" src={decSvg}/></span>
                                    <div className="Reg_Form_date"> 
                                          <p>Email</p>
                                          <input onChange={this.onChangeFormSignUp} type={"email"} name={"email"} value= {this.state.email}/>
                                          <p className="Error_msg">{this.state.error_email.pop()}</p>
                                          <p>Hasło</p>
                                          <input className= {this.state.isInvalid ? "": "red_alert"} onChange={this.onChangeFormSignUp} type={"password"} name={"password"} value= {this.state.password}/>
                                          <p>Powtórz Hasło</p>
                                          <input className= {this.state.isInvalid ? "": "red_alert"} onChange={this.onChangeFormSignUp} type={"password"} name={"secondPassword"} value= {this.state.secondPassword}/>
                                          <p className="Error_msg">{this.state.error_password.pop()}</p>
                                    </div>
                                    <div className="Reg_Form_btn">
                                          <a onClick={this.onSubmitSignUp}>Załóż konto</a>
                                          <a href="/logowanie" >Zaloguj się</a>
                                    </div>

                              </div>
                  </>
            )
      }
}
export default ReggScreen;

