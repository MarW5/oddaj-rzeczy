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
            name : "name",
            email : "email",
            message : "message"
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
                }
        }).catch(error =>{
            console.log(error)
        })
    
        const {name, email, message, error_email, error_name, error_msg} = this.state;

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    
        if (name.length < 3 ) {
            error_name.push("Podane imię jest nieprawidłowe!");
            
        }
    
        if (validateEmail(email)) {
            error_email.push("Podany email jest nieprawidłowy!");
            
        }
        if (message.length < 120) {
            error_msg.push("Wartość musi mieć conajmniej 120 znaków!");
            
          }
    
        if (error_msg.length !== "" || error_email.length !== "" ||  error_name.length !== "") {
          this.setState({
            isLogged: false
          });
          return false;
        }  

        
    }
       
    render() {
        const {isLogged, name, email, message, error_msg, error_email, error_name} = this.state;

       
                
        

        if(isLogged === false){
            

            return(
                
            
                <div className="Contact">
                    <img alt="background" className="Bg_clothes" src={BgContact}/>  
                    <div  className="Contact_content ">
                        <h3>Skontaktuj się z nami</h3>
                        <span><img alt="decoration_element" src={decSvg}/></span>
                        <div className="form_box">
                        <div className="form_name_email">
                            <div className="form_both">
                                <p>Wpisz swoje imię:</p>
                                <input onChange={this.handleChange} name="name" value={name} type='text'placeholder="Krzysztof"/>
                                <p className="Error_msg">{error_name.pop()}</p>
                            </div>
                            <div className="form_both" >
                                <p>Wpisz swój email:</p>
                                <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="abc@xyz.pl"/>
                                <p className="Error_msg">{error_email.pop()}</p>
                            </div>
                        </div>
                        <div className="massage_toUs">
                            <p>Wpisz swoją wiadomość:</p>
                            <textarea onChange={this.handleChange} value={message} name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            <p className="Error_msg">{error_msg.pop()}</p>
                        </div>
                        <button className="Form_btn" onClick={this.handleFormSubmit}>Wyślij</button>
                        </div>
                    </div>  
                    <Footer/>
                </div>
                
            
            )

        }

        return(

            <div className="Contact">
            <img alt="background" className="Bg_clothes" src={BgContact}/>  
            <div className="Contact_content">
                <h3>Skontaktuj się z nami</h3>
                <span><img alt="decoration_element" src={decSvg}/></span>

                <p>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>

                <div className="form_box">
                <div className="form_name_email">
                    <div className="form_both">
                        <p>Wpisz swoje imię:</p>
                        <input onChange={this.handleChange} name="name" value={name} type='text'placeholder="Krzysztof"/>
                    </div>
                    <div className="form_both" >
                        <p>Wpisz swój email:</p>
                        <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="abc@xyz.pl"/>
                        
                    </div>
                </div>
                <div className="massage_toUs">
                    <p>Wpisz swoją wiadomość:</p>
                    <textarea onChange={this.handleChange} value={message} name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                </div>
                <button className="Form_btn" onSubmit={this.handleFormSubmit} >Wyślij</button>
                </div>
            </div>  
            <Footer/>
        </div>
              
        )
        
    }
    
}

export default Contact;