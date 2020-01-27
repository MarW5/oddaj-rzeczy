import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'



class Form_step6 extends Component {
      render(){
            return (
                  <div className="Form_content">

                        <div className="Form_box box_form">
                              <div className="box_form_end">  
                                    <h3 className="end_form">Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h3>
                                    <span><img alt="decoration line" src={decSvg}/></span>
                              </div>
                        </div>
                  </div>
            )
      }
}


export default Form_step6