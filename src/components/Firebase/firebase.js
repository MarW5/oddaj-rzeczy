import  app  from "firebase/app";
import 'firebase/auth';


 var config = {
    apiKey: "AIzaSyC-ACjl7MmztQAbw5IK8d-4LjWg9bwiBqI",
    authDomain: "oddaj-rzeczy-4e5bd.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-4e5bd.firebaseio.com",
    projectId: "oddaj-rzeczy-4e5bd",
    storageBucket: "oddaj-rzeczy-4e5bd.appspot.com",
    messagingSenderId: "893133205901",
    appId: "1:893133205901:web:405dd8ff2b92df36188dc4",
    measurementId: "G-LZZ9GDPQFM"
  };

  class Firebase{
        constructor(){
              app.initializeApp(config);

              this.auth = app.auth();
        }

         // *** Auth API ***
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      //**reset and change a password for an authenticated user */
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      
      doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }

  export default Firebase
 
  