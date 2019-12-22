import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';
import Contact from "./Home_components/Contact"



class FormScreen extends Component{
      render(){
            return(
                  <>
                        <div>
                              <HomeHeader/>
                              <div></div>
                        </div>
                        
                        <div className="Warnning_banner">
                              <h3>Ważne!</h3>
                              <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                        </div>

                        <div className="Form_Giving">

                        </div>

                        <Contact/>



                  
                  </>
            )
      }
}

export default FormScreen