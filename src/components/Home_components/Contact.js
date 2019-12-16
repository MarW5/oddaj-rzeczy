import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import BgContact from '../../assets/assets/Background-Contact-Form.jpg'
import Footer from './Footer';


class Contact extends Component{
    render() {
        return(
            
                <div className="Contact">
                    <img alt="background" className="Bg_clothes" src={BgContact}/>  
                    <div className="Contact_content">
                        <h3>Skontaktuj się z nami</h3>
                        <span><img alt="decoration_element" src={decSvg}/></span>
                        <div className="form_box">
                        <div className="form_name_email">
                            <div className="form_both">
                                <p>Wpisz swoje imię:</p>
                                <input type='text'placeholder="Krzysztof"/>
                            </div>
                            <div className="form_both" >
                                <p>Wpisz swój email:</p>
                                <input type={"email"} placeholder="abc@xyz.pl"/>
                            </div>
                        </div>
                        <div className="massage_toUs">
                            <p>Wpisz swoją wiadomość:</p>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        </div>
                        <button className="Form_btn">Wyślij</button>
                        </div>
                    </div>  
                    <Footer/>
                </div>
                
            
        )
    }
    
}

export default Contact;