import React, { Component } from 'react';
import Icon1 from "../../assets/assets/Icon-1.svg"
import Icon4 from "../../assets/assets/Icon-4.svg"

class Form_step5 extends Component{

      render(){
            return (
                  
                  <div className="Form_content">

                        <div className="Important_box">
                                          <h2>Ważne!</h2>
                                          <p>Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                        <div className="Form_box">  
                              <h3 className="text_local">Podsumowanie Twojej darowizny</h3>
                              <div className="summary">
                                    <p>Oddajesz:</p>
                                    <span className="summary_box"><img alt="T_shirt" src={Icon1}/> { this.props.valueBags > 1 ? this.props.valueBags + " worki" : this.props.valueBags + " worek"} , {this.props.valueRadio}, {this.props.valueCheckbox}</span>
                                    <span className="summary_box"><img alt="courier" src={Icon4}/> dla lokalizacji: {this.props.valueCity}</span>
                              </div>
                              <div className="information">
                                    <div className="information_content">
                                                <p className="information_content_text">Adres odbioru:</p>
                                                <label className="client_info">
                                                      <p>Ulica</p>
                                                      <span>{this.props.street}</span>
                                                </label>

                                                <label className="client_info">
                                                      <p>Miasto</p>
                                                      <span>{this.props.city}</span>
                                                </label>

                                                <label className="client_info">
                                                      <p>Kod pocztowy</p>
                                                      <span>{this.props.postCode}</span>
                                                </label>

                                                <label className="client_info">
                                                      <p>Numer telefonu</p>
                                                      <span>{this.props.phone}</span>
                                                </label>

                                          </div>

                                          <div className="information_content">
                                                <p className="information_content_text">Termin odbioru:</p>
                                                <label className="client_info">
                                                      <p>Data</p>
                                                      <span>{this.props.date}</span>
                                                </label>

                                                <label className="client_info">
                                                      <p>Godzina</p>
                                                      <span>{this.props.time}</span>
                                                </label>

                                                <label className="client_info">
                                                      <p>Uwagi dla kuriera</p>
                                                      <span>{this.props.note}</span>
                                                </label>  
                                          
                                          </div>
                                    </div>
                                    
                                          <label className="buttons_step2">
                                                      <a onClick={this.props.handleFormPrevious5}>Wstecz</a>
                                                      <a onClick={this.props.handleClickFormStepNext5}>Dalej</a>
                                          </label>
                               
                              </div>


                  </div>
            )
      }
}

export default Form_step5