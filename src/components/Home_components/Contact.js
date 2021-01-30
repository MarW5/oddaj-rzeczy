import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import BgContact from '../../assets/assets/Background-Contact-Form.jpg'
import Footer from './Footer';


class Contact extends Component{
    state={
        name:"",
        email:"",
        message:"",
        error_name : [],
        error_email : [],
        error_msg : [],
        sukcess_msg: [],
        isLogged: false

    };
    
    
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            
        });
      };

    handleFormSubmit = e => {
        e.preventDefault();

        const obj = {
            name : this.state.name,
            email : this.state.email,
            message : this.state.message
        }

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( obj )
                
        }).then( response => {
            if(response.ok === true){
                console.log(response)
                this.setState({
                    sukcess_msg: "Dziękujemy za przesłanie wiadomości",
                    error_msg: [],
                    error_email: [],
                    error_name: [],
                    name:"",
                    email:"",
                    message:""

                })
                }
        }).catch(error =>{
            console.log(error)
        })
        
    
        const {name, email, message,error_msg ,error_email, error_name} = this.state;
        
        function validateName(name){
            let letters = /^[A-Za-z]+$/
            return letters.test(String(name).toLowerCase());
        }
        

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    
        if (name.length < 3 || validateName(name) === false) {
            this.setState({
                error_name: "Podane imię jest nieprawidłowe!"
            })
            
        }
    
        if (validateEmail(email) === false) {
            this.setState({
                error_email: "Podany email jest nieprawidłowy!"
            })
            
        }
        if (message.length < 120) {
            this.setState({
                error_msg: "Wartość musi mieć conajmniej 120 znaków!"
            })
          }if(name.length >3 && validateName(name) === true){
            this.setState({
                error_name: [],
              });

        }if(validateEmail(email) === true){
            this.setState({
                error_email: [],
                
              });

        }if (message.length > 120 ) {
            this.setState({
                error_msg: [],
                
              });
            
        }  
        console.log(obj);
}
     
    render() {
        const {name, email, message, error_msg, error_email,sukcess_msg, error_name} = this.state;

            return(
                 
                <div className="Contact">
                    
                    <div className="Contact_content ">
                        <h3>Skontaktuj się z nami</h3>
                        <span className="border_decoration"><img alt="decoration_element" src={decSvg}/></span>
                        <p className=" Sukcess_msg">{sukcess_msg}</p>
                        <div className="form_box">
                        <div className="form_name_email">
                            <div className="form_both">
                                <p>Wpisz swoje imię:</p>
                                <input onChange={this.handleChange} name="name" value={name} type='text'placeholder="Krzysztof"/>
                                <p className="alert_error">{error_name}</p>
                            </div>
                            <div className="form_both" >
                                <p>Wpisz swój email:</p>
                                <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="abc@xyz.pl"/>
                                <p className="alert_error">{error_email}</p>
                            </div>
                        </div>
                        <div className="massage_toUs">
                            <p>Wpisz swoją wiadomość:</p>
                            <textarea onChange={this.handleChange} value={message} name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            <p className="alert_error">{error_msg}</p>
                        </div>
                        <button className="Form_btn" onClick={this.handleFormSubmit}>Wyślij</button>
                        </div>
                    </div>  
                    
                </div>
                
            
                )
        }  
}

export default Contact;