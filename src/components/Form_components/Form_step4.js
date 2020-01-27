import React, { Component } from 'react';

class Form_step4 extends Component{
      render(){
            return(
                  <div className="Form_content">

                        <div className="Important_box">
                                          <h2>Ważne!</h2>
                                          <p>Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                        <div className="Form_box">
                              <p>Krok 4/4</p>  
                              <h3 className="text_local">Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
                              <div className="information">
                                    <div className="information_content">

                                          <p className="information_content_text">Adres odbioru:</p>

                                          <label className="client_info">
                                                <p>Ulica</p>
                                                <input onChange={this.props.handleChangeStep4street} type="tekst" name="name" value={this.props.street}/>
                                          </label>
                                          <p className="error_message_label">{this.props.error_street}</p>

                                          <label className="client_info">
                                                <p>Miasto</p>
                                                <input onChange= {this.props.handleChangeStep4City} type="tekst" name="name" value={this.props.city}/>
                                          </label>
                                          <p className="error_message_label">{this.props.error_city}</p>

                                          <label className="client_info">
                                                <p>Kod pocztowy</p>
                                                <input placeholder="00-000" onChange = {this.props.handleChangeStep4postCode} type="tekst" name="name" value={this.props.postCode}/>
                                          </label>
                                          <p className="error_message_label">{this.props.error_postCode}</p>

                                          <label className="client_info">
                                                <p>Numer telefonu</p>
                                                <input onChange = {this.props.handleChangeStep4phone} type="tekst" name="name" value= {this.props.phone}/>
                                          </label>
                                          <p className="error_message_label">{this.props.error_phone}</p>

                                    </div>

                                    <div className="information_content">
                                          <p className="information_content_text">Termin odbioru:</p>
                                          <label className="client_info">
                                                <p>Data</p>
                                                <input onChange = {this.props.handleChangeStep4date} type="date" name="name" value = {this.props.date}/>
                                          </label>
                                          <p className="error_message_label">{this.props.error_date}</p>

                                          <label className="client_info">
                                                <p>Godzina</p>
                                                <input onChange = {this.props.handleChangeStep4time} type="time" name="name" value = {this.props.time}/>
                                          </label>

                                          <label className="client_info">
                                                <p>Uwagi dla kuriera</p>
                                                <input onChange = {this.props.handleChangeStep4note} type="tekstarea" name="name"  value = {this.props.note}/>
                                          </label>  
                                        
                                    </div>
                              </div>  

                                    <label className="buttons_step3">
                                                <a onClick={this.props.handleFormPrevious4}>Wstecz</a>
                                                <a onClick = {this.props.handleClickFormStepNext4}>Dalej</a>
                                    </label>
                        </div>

                  </div>
            )
      }
}
export default Form_step4

