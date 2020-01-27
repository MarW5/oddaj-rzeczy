import React, { Component } from 'react';
import Form_step2 from "../Form_components/Form_step2"
import Form_step3 from "../Form_components/Form_step3"
import Form_step4 from "../Form_components/Form_step4"
import Form_step5 from "../Form_components/Form_step5"
import Form_step6 from "../Form_components/Form_step6"
// import myFirebase from "../../Firebase/fbconfig"
// import firebase from "firebase";


class Form_Window extends Component{
      
            state={
                  isActive: 1,
                  valueRadio: "",
                  valueBags:"",
                  valueCity:"",
                  valueCheckbox: [],
                  valueNameOrganization:"",
                  street:"",
                  city:"",
                  postCode:"",
                  phone:"",
                  date:"",
                  time:"",
                  note:""  ,
                  error_street:"",  
                  error_city:"",  
                  error_postCode:"",  
                  error_phone:"" ,
                  error_date:""  
            }
           
            

      handleChangeStep1 = e=>{
            this.setState({
                  // [e.target.name]:e.target.value
                  valueRadio:e.currentTarget.value
            });         
      };

      handleClickFormStepNext=e=>{
            e.preventDefault();
            const{valueRadio}=this.state;
            if(valueRadio.length === 0){
                  this.setState({
                        isActive:1
                  })
                  
            } else {
                  this.setState({
                        isActive: 2
                  })
            }
            }


            //Form 2 events

            

                  handleChangeStep2 = e =>{
                        const {valueBags}= this.state
                        this.setState({
                              valueBags:e.currentTarget.value
                        });

                  };  

                  handleFormPrevious2 = e =>{
                        e.preventDefault();
                        this.setState({
                              isActive:1
                              })                         
                        }  

                        handleClickFormStepNext2 = e=>{
                        this.setState({
                              isActive:3
                              })

                  } 



                     //Form 3 Events

                  handleChangeStep3ValueCity = e => {
                        const {valueCity}= this.state
                        this.setState({
                              valueCity:e.target.value
                        });
                       
                  };  


                 
                  handleChangeStep3ValueCheckbox = e => {
                         const removeItem =(e)=>{
                              let newArray = this.state.valueCheckbox;
                              let index = newArray.indexOf(e.target.value)
                              newArray.splice([index])  
                        }

                        const {valueCheckbox}= this.state
                        
                        if(e.target.checked){
                              this.setState({
                                    valueCheckbox: [...this.state.valueCheckbox,e.target.value],
                              },()=>{
                                    console.log(this.state.valueCheckbox)
                              })
                        }else if (removeItem(e)){
                              this.setState({
                                    valueCheckbox: []
                              })
                        }
                      
                        console.log(e.currentTarget)
                        console.log(valueCheckbox)
                        
                  };  
                  
                  handleChangeStep3valueNameOrganization = e => {
                        const {valueNameOrganization} = this.state
                        this.setState({
                              valueNameOrganization:e.currentTarget.value
                        })  
                  }

                  handleClickFormStepNext3= e=>{
                        // e.preventDefault();
                              const{valueCity,valueCheckbox,valueNameOrganization} = this.state;
                              
                              this.setState({
                                    isActive:4
                                    })
            
                     } 
                     handleFormPrevious3 = e =>{
                        e.preventDefault();
                        const{valueCity,valueCheckbox,valueNameOrganization} = this.state;
                        this.setState({
                              isActive:2
                              })                         
                        } 

                        // Form 4 events

                        handleChangeStep4street = e =>{
                              const {street} = this.state
                              this.setState({
                                    street:e.target.value,
                                    
                              })
                        }
                        handleChangeStep4City = e =>{
                              const {city}= this.state
                              this.setState({
                                    city:e.target.value
                              });          
                        }
                        handleChangeStep4postCode = e =>{
                              const {postCode} = this.state
                              this.setState({
                                    postCode:e.target.value
                              })
                               
                        }    
                        handleChangeStep4phone = e =>{
                              const {phone} = this.state
                              this.setState({
                                    phone:e.target.value
                              })
                        }
                        handleChangeStep4date = e =>{
                              const {date} = this.state
                              this.setState({
                                    date:e.target.value
                              })
                        }
                        handleChangeStep4time = e =>{
                              const {time } = this.state
                              this.setState({
                                    time:e.target.value
                              })
                        }
                        handleChangeStep4note = e =>{
                              const {note} = this.state
                              this.setState({
                                    note:e.target.value
                              })
                        }

                        
                        handleClickFormStepNext4= e=>{
                              e.preventDefault();
                              if(this.state.street === ""){
                                    this.setState({
                                          error_street: "Pole nie może być puste"
                                           
                                  }) 
                              }else {
                                    this.setState({
                                    error_street: ""
                                     
                                    })  
                              }
                              if(this.state.city ===""){
                                    this.setState({
                                          error_city: "Pole nie może być puste"
                                    })
                              }else {
                                    this.setState({
                                          error_city: "" 
                                    })
                              }if(this.state.postCode === ""){
                                    this.setState({
                                          error_postCode: "Błędny format"
                                    })
                              }else {
                                    this.setState({
                                          error_postCode: ""
                                    })
                              }if(this.state.phone=== ""){
                                    this.setState({
                                          error_phone: "Wpisz poprawny numer telefonu"
                                    })
                              }else {
                                    this.setState({
                                          error_phone:""
                                    })
                              }if (this.state.date ===""){
                                    this.setState({
                                          error_date: "Wpisz poprawną date dostawy"
                                    })
                                    
                              }else {
                                    this.setState({
                                          error_date: ""
                                    })
                              }
                              
                              if(this.state.error_city === "" && this.state.error_date === "" && this.state.error_postCode === "" && this.state.error_phone ===""){
                                    this.setState({
                                          isActive:5
                                          }) 
                                  
                              } else {
                                    this.setState({
                                          isActive:4
                                          }) 

                              }
                              
                        }


                           handleFormPrevious4 = e =>{
                              e.preventDefault();
                              this.setState({
                                    isActive:3
                                    }) 
                                                           
                              } 

                               

                     // Form 5 events  

                     handleClickFormStepNext5= e=>{
                        // e.preventDefault();
                              
                              this.setState({
                                    isActive:6
                                    })
            
                     } 
                     handleFormPrevious5 = e =>{
                        e.preventDefault();
                        const{valueCity,valueCheckbox,valueNameOrganization} = this.state;
                        this.setState({
                              isActive:4
                              })                         
                        } 
                    
                     
                     
            
            
      render(){
            if(this.state.isActive === 1){
                  return(
                        <div name= "Form_Window" className="Form_content">
                              <div className="Important_box">
                                    <h2>Ważne!</h2>
                                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                              </div>
      
                              <div className="Form_box">
                                    <p className="Steps_number">Krok 1/4</p>

                                    <div className="form_radio">
                                          <h3 className="text_local">Zaznacz co chcesz oddać:</h3>
                                          <ul className= "form_radio_box">
                                                <li>
                                                      <label>
                                                            <input
                                                            onChange={this.handleChangeStep1}
                                                            type="radio" 
                                                            name="gender" 
                                                            value={"ubrania, które nadają się do ponownego użycia"}
                                                            />
                                                            ubrania, które nadają się do ponownego użycia
                                                      </label>
                                                </li>
                                                <li>
                                                      <label>
                                                            <input
                                                            onChange={this.handleChangeStep1}
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
                                                            onChange={this.handleChangeStep1}
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
                                                            onChange={this.handleChangeStep1}
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
                                                            onChange={this.handleChangeStep1}
                                                            type="radio" 
                                                            name="gender" 
                                                            value="inne"
                                                            />
                                                            inne
                                                      </label>
                                                </li>
                                                
      
                                          </ul>
                                          <a onClick={this.handleClickFormStepNext}>Dalej</a>
                                    </div>
                              </div>
                             
                        </div>
                  )
            }
            else if (this.state.isActive===2) 
            {
                  return <Form_step2 
                  handleChangeStep2={this.handleChangeStep2}
                  handleClickFormStepNext2={this.handleClickFormStepNext2}
                  handleFormPrevious2={this.handleFormPrevious2}

                  valueBags={this.state.valueBags}
                  />
       

            }else if (this.state.isActive===3){
                  return <Form_step3  
                  handleChangeStep3ValueCheckbox = {this.handleChangeStep3ValueCheckbox} 
                  handleChangeStep3ValueCity = {this.handleChangeStep3ValueCity}
                  handleChangeStep3valueNameOrganization = {this.handleChangeStep3valueNameOrganization}
                  handleFormPrevious3 = {this.handleFormPrevious3}
                  handleClickFormStepNext3={this.handleClickFormStepNext3}
                  valueCity={this.state.valueCity}
                  valueCheckbox={this.state.valueCheckbox} 
                  valueNameOrganization = {this.state.valueNameOrganization}
     
                  />
            }else if (this.state.isActive ===4){
                  return <Form_step4
                  handleChangeStep4street = {this.handleChangeStep4street}
                  handleChangeStep4City = {this.handleChangeStep4City}
                  handleChangeStep4postCode = {this.handleChangeStep4postCode}
                  handleChangeStep4phone = {this.handleChangeStep4phone}
                  handleChangeStep4date = {this.handleChangeStep4date}
                  handleChangeStep4time = {this.handleChangeStep4time}
                  handleChangeStep4note = {this.handleChangeStep4note}
                  handleClickFormStepNext4 = {this.handleClickFormStepNext4}
                  handleFormPrevious4 = {this.handleFormPrevious4}
                  street={this.state.street}
                  city={this.state.city}
                  postCode={this.state.postCode}
                  phone={this.state.phone}
                  date={this.state.date}
                  time={this.state.time}
                  note={this.state.note}
                  error_street={this.state.error_street}  
                  error_city={this.state.error_city}    
                  error_postCode={this.state.error_postCode}   
                  error_phone={this.state.error_phone}  
                  error_date={this.state.error_date}   
                  />
            }else if (this.state.isActive ===5){
                  return <Form_step5
                  handleClickFormStepNext5 = {this.handleClickFormStepNext5}
                  handleFormPrevious5 = {this.handleFormPrevious5}
                  valueRadio={this.state.valueRadio}
                  valueBags = {this.state.valueBags }
                  valueCity = {this.state.valueCity}
                  valueCheckbox = {this.state.valueCheckbox.map((item)=>
                       <span>{item}</span> )}
                  valueNameOrganization = {this.state.valueNameOrganization}
                  street= {this.state.street}
                  city = {this.state.city}
                  postCode = {this.state.postCode}
                  phone = {this.state.phone}   
                  date = {this.state.date}
                  time = {this.state.time}
                  note = {this.state.note}   
                  />
            }else if(this.state.isActive === 6){
                  return <Form_step6/>
            }
            
                    
      }
}

export default Form_Window