import React, { Component } from 'react';
import HomeHeader from './Home_components/HomeHeader';
import  { FirebaseContext } from '../components/Firebase';

// class LoggIn extends Component{
//       render(){
//             return <h3>Jesteś zalogowany</h3>
                  
            
//       }
// }

const LoggIn = () => (
      
      <FirebaseContext.Consumer>
        {firebase => {
          return <div><h3>Jesteś zalogowany</h3></div>;
        }}
      </FirebaseContext.Consumer>
    );
    

export default LoggIn;