import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from '../Home_components/HomeHeader';
import myFirebase from "../../Firebase/fbconfig"


class ReggScreen extends Component{
      state={
            email:'',
            password:'',
            secondPassword:'',
            isInvalid: false,
            error_email:[],
            error_password:[]
      }
      
      onSubmitSignUp = e => {
          e.preventDefault();
          myFirebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then((u)=>{
            this.setState({
                  isInvalid:true
            }); 
          })
          .catch((error)=>{
                if(error.code === "auth/email-already-in-use"){
                      this.setState({
                        error_email: "Podany email jest juz w użyciu"
                      })
                }
                this.setState({
                      isInvalid:false
                });
          })

        

        const {email, password, secondPassword}= this.state;

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        if(password !== secondPassword || password=== "" ){
            this.setState({
                  isInvalid: false,
                  error_password: "Podane hasła nie są identyczne"
            })
            

      }if (email === "" ||validateEmail(email) === false || email.length >= 5){
            this.setState({
                  isInvalid: false,
                  error_email: "Podany email jest nieprawidłowy"
            })

      }

      
      else if(password === secondPassword || password.length < 5 || validateEmail(email) === true){
            this.setState({
                  isInvalid: true,
                  error_password: [],
                  error_email: []

            })

      }
      // else if(error.code === "auth/email-already-in-use" ){
      //       this.setState({
      //             error_email: "Podany email jest juz w użyciu"

      //       })
      // }
      
       };

      
        onChangeFormSignUp = e => {
            this.setState({ 
                  [e.target.name]: e.target.value 
                    
            });
      }
           
          
      render(){
            if(this.state.isInvalid === false){

                  return (
                        <>    <div className="Home_Banner_LoggScreen">
                                    <HomeHeader/>
                              </div>
                                    <div className="Reg_Form">
                                          <h2>Załóż konto</h2>
                                          <span><img alt="decoration icon" src={decSvg}/></span>
                                          <div className="Reg_Form_date"> 
                                                <p>Email</p>
                                                <input onChange={this.onChangeFormSignUp} type={"email"} name={"email"} value= {this.state.email}/>
                                                <p className="Error_msg">{this.state.error_email}</p>
                                                <p>Hasło</p>
                                                <input onChange={this.onChangeFormSignUp} type={"password"} name={"password"} value= {this.state.password}/>
                                                <p>Powtórz Hasło</p>
                                                <input onChange={this.onChangeFormSignUp} type={"password"} name={"secondPassword"} value= {this.state.secondPassword}/>
                                                <p className="Error_msg">{this.state.error_password}</p>
                                          </div>
                                          <div className="Reg_Form_btn">
                                                <a onClick={this.onSubmitSignUp}>Załóż konto</a>
                                                <a href="/logowanie">Zaloguj się</a>
                                          </div>
      
                                    </div>
                        </>
                  )
            }else if (this.state.isInvalid=== true){
                  return(

                        <>
                              <div className="Home_Banner_LoggScreen">
                                    <HomeHeader/>
                              </div>
                              <div className="Reg_Form">
                                    <h2>Załóż konto</h2>
                                    <span><img alt="decoration icon" src={decSvg}/></span>
                                    <div className="Reg_process_succes"> 
                                                <p className="Succes_message">Rejestracja przebiegła pomyślnie!</p><p className="Succes_message"> Przejdź do ekranu logowania.</p>
                                          <a className="log_btn" href="/logowanie">Zaloguj się</a>
                                    </div>
            
                              </div>
                        </>

                  )
                 
            }
     
            
      }
}
export default ReggScreen;

