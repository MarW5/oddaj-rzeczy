import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import FourSteps from "./FourSteps";


class Contact extends Component{
    render() {
        return(
            <div className="Contact">
                <div className="Contact_content">
                    <h3>Skontaktuj się z nami</h3>
                    <span><img src={decSvg}/></span>
                    <form>
                        Wpisz swoje imię:
                        <input type='text'/>
                        Wpisz swój email:
                        <input type={"email"}/>
                        Wpisz swoją wiadomość:
                        <textarea></textarea>
                    </form>
                    <button>Wyślij</button>
                </div>
            </div>
        )
    }
}

export default Contact;