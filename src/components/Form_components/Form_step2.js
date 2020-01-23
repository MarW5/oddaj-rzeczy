import React, { Component } from 'react';



class Form_step2 extends Component{
    
      
       
      handleClickFormStepNext2 = ()=>{
            if(typeof this.props.handleClickFormStepNext2 ==="function"){
                  this.props.handleClickFormStepNext2(this.props.handleClickFormStepNext2)
            }
            
      }

      
      
      
      
      render(){     
                  return(
                        <div className="Form_content">
                                    <div className="Important_box">
                                          <h2>Ważne!</h2>
                                          <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                                    </div>
                                    <div className="Form_box step2_box">
                                          <p>Krok 2/4</p>
                                          <label className="Numbers_of_bags">
                                          <h3 className="text_local">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                                                
                                          <div className="Select_content">
                                                <p>Liczba 60l worków:</p> 
                                                      <select onChange={this.props.handleChangeStep2} value={this.props.valueBags} className="Chosse_numbers">
                                                            <option name="name" value = "">-wybierz-</option>
                                                            <option name="name" value= "1"> 1</option>
                                                            <option name="name" value= "2"> 2</option>
                                                            <option name="name" value= "3"> 3</option>
                                                            <option name="name" value= "4"> 4</option>
                                                            <option name="name" value= "5"> 5</option>
                                                      </select>
                                          </div>
                                          </label>
                                          <label className="buttons_step2">
                                                <a onClick={this.props.handleFormPrevious2}>Wstecz</a>
                                                <a onClick={this.handleClickFormStepNext2}>Dalej</a>
                                          </label>
                                    </div>
      
                              </div>
                  )
            }
                    
      
}

export default Form_step2