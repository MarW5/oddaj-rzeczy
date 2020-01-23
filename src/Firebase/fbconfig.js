import  firebase   from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

 const  firebaseConfig  = {
    apiKey: "AIzaSyC-ACjl7MmztQAbw5IK8d-4LjWg9bwiBqI",
    authDomain: "oddaj-rzeczy-4e5bd.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-4e5bd.firebaseio.com",
    projectId: "oddaj-rzeczy-4e5bd",
    storageBucket: "oddaj-rzeczy-4e5bd.appspot.com",
    messagingSenderId: "893133205901",
    appId: "1:893133205901:web:405dd8ff2b92df36188dc4",
    measurementId: "G-LZZ9GDPQFM"
  };

  export const myFirebase = firebase.initializeApp(firebaseConfig);
  
  export default myFirebase
 
  