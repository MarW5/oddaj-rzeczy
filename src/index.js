import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './scss/main.scss';
import App from './App';

import FirebaseContext from './components/context';
import Firebase from './components/Firebase';





ReactDOM.render(
      <FirebaseContext.Provider value={new Firebase()}>
            <App />, 
      </FirebaseContext.Provider>,
document.getElementById('root'));


serviceWorker.unregister();

export default Firebase;
export { FirebaseContext };

