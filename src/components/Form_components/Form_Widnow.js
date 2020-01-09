import React, { Component } from 'react';


class Form_Window extends Component{
      render(){
            return(
                  <div className="Form_content">
                        <div className="Important_box">
                              <h2>Ważne!</h2>
                              <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                        </div>

                        <div className="Form_box">
                              <p>Krok 1/4</p>
                              <div className="form_radio">
                                    <h3>Zaznacz co chcesz oddać:</h3>
                                    <ul class= "radio_form">
                                          <li>
                                                <label>
                                                      <input
                                                      type="radio" 
                                                      name="gender" 
                                                      value="ubrania, które nadają się do ponownego użycia"
                                                      />
                                                      ubrania, które nadają się do ponownego użycia
                                                </label>
                                          </li>
                                          <li>
                                                <label>
                                                      <input
                                                      type="radio" 
                                                      name="gender" 
                                                      value="ubrania, do wyrzucenia"
                                                      />
                                                      ubrania, do wyrzucenia
                                                </label>
                                          </li>
                                          <li>
                                                <label>
                                                      <input
                                                      type="radio" 
                                                      name="gender" 
                                                      value="zabawki"
                                                      />
                                                      zabawki
                                                </label>
                                          </li>
                                          <li>
                                                <label>
                                                      <input
                                                      type="radio" 
                                                      name="gender" 
                                                      value="książki"
                                                      />
                                                      książki
                                                </label>
                                          </li>
                                          <li>
                                                <label>
                                                      <input
                                                      type="radio" 
                                                      name="gender" 
                                                      value="inne"
                                                      />
                                                      inne
                                                </label>
                                          </li>
                                          

                                    </ul>
                                    <a href="/step2">Załóż konto</a>
                              </div>
                        </div>
                  </div>

            )
            
      }
}

export default Form_Window