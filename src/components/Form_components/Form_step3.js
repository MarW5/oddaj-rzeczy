import React, { Component } from 'react';


class Form_step3 extends Component{

       
      
      handleClickFormStepNext3 = ()=>{
            if(typeof this.props.handleClickFormStepNext3 ==="function"){
                  this.props.handleClickFormStepNext3(this.props.handleClickFormStepNext3)
            }
            
      }

      

      render(){
            return(
                  <div className="Form_content">

                        <div className="Important_box">
                                          <h2>Ważne!</h2>
                                          <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                        <div className="Form_box">
                                          <p>Krok 3/4</p>          
                                                <div className="Select_content select_box_step3">
                                                <h3 className="text_local">Lokalizacja:</h3>
                                                      <select onChange={this.props.handleChangeStep3ValueCity} value = {this.props.valueCity} className="Chosse_numbers select_step3">
                                                            <option name="name" value = " "> -wybierz-</option>
                                                            <option name="name" value= "Poznań"> Poznań </option>
                                                            <option name="name" value= "Warszawa"> Warszawa </option>
                                                            <option name="name" value= "Kraków"> Kraków </option>
                                                            <option name="name" value= "Wrocław"> Wrocław </option>
                                                            <option name="name" value= "Katowice"> Katowice </option>
                                                      </select>
                                                </div>
                                          
                                                <div className="helpGroups">
                                                      <p className="helpGroups_text">Komu chcesz pomóc?</p>
                                                      <ul className="select_helpcategory">
                                                            <li className="checkbox_area">
                                                                  <label className="checkbox_content"><p className="tekst_alwaysOn">dzieciom</p>
                                                                        
                                                                        <input 
                                                                              onClick={this.props.handleChangeStep3ValueCheckbox}
                                                                              id = {this.props.isChecked.boxOne}
                                                                              type="checkbox" 
                                                                              name="checkbox" 
                                                                              value={"dzieciom"}                                                                          
                                                                              />
                                                                  </label>
                                                                              
                                                                  
                                                            </li>
                                                            <li className="checkbox_area">
                                                                  <label className="checkbox_content"><p className="tekst_alwaysOn">samotnym matkom</p>
                                                                        <input
                                                                              onClick={this.props.handleChangeStep3ValueCheckbox}
                                                                              id = {this.props.isChecked.boxTwo}
                                                                              type="checkbox" 
                                                                              name="checkbox" 
                                                                              value={"samotnym matkom"}                                               
                                                                              />
                                                                  </label>
                                                                        
                                                            </li>
                                                            <li className="checkbox_area">
                                                                  <label className="checkbox_content"><p className="tekst_alwaysOn">bezdomnym</p>
                                                                        <input
                                                                              onClick={this.props.handleChangeStep3ValueCheckbox}
                                                                              id = {this.props.isChecked.boxTree}
                                                                              type="checkbox" 
                                                                              name="checkbox" 
                                                                              value={"bezdomnym"}                                                                            
                                                                              />  
                                                                  </label>
                                                            </li>
                                                            <li className="checkbox_area">
                                                                  <label className="checkbox_content"><p className="tekst_alwaysOn">niepełnosprawnym</p>
                                                                        <input
                                                                              onClick={this.props.handleChangeStep3ValueCheckbox}
                                                                              id = {this.props.isChecked.boxFour}
                                                                              type="checkbox" 
                                                                              name="checkbox" 
                                                                              value={"niepełnosprawnym"}

                                                                              />
                                                                        
                                                                        </label>
                                                                       
                                                            </li>
                                                            <li className="checkbox_area">
                                                                  <label className="checkbox_content"><p className="tekst_alwaysOn">osobom starszym</p>
                                                                        <input
                                                                              onClick={this.props.handleChangeStep3ValueCheckbox}
                                                                              id = {this.props.isChecked.boxFive}
                                                                              type="checkbox" 
                                                                              name="checkbox" 
                                                                              value={"osobom starszym"}
                                                                        />        
                                                                  </label>
                                                            </li>
                                                      </ul>  
                                                      
                                                </div>

                                                <div className="Text_input">
                                                
                                                      <p className="name_organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                                                      <input onChange={this.props.handleChangeStep3valueNameOrganization} className="write_organization" type="text" value= {this.props.valueNameOrganization} name= "write_organization"/>
                                                </div>

                                                <label className="buttons_step2">
                                                                        <a onClick={this.props.handleFormPrevious3}>Wstecz</a>
                                                                        <a onClick={this.handleClickFormStepNext3}>Dalej</a>
                                                </label>
                                    </div>
                                    

                                    
                        </div>
            )

      }
}

export default Form_step3