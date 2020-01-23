import React, { Component } from 'react';
import Form_Header from '../Form_components/Form_header';
import Form_Window from './Form_Widnow';
import Contact from "../Home_components/Contact"



class FormScreen extends Component{
      render(){
            const {user}= this.props
            return(

                  <>
                        
                              <Form_Header user={this.props.user}/>
                              <Form_Window/>
                              <Contact/>
                  </>
            )      
      }
}

export default FormScreen