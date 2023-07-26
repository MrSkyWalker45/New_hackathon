// Import the functions you need from the SDKs you n
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';         
const firebaseConfig = {
  apiKey: "AIzaSyDkSH8-BZnDk7EHXwhSFbFy7Cv6It8QF80",
  authDomain: "pulseo.firebaseapp.com",
  projectId: "pulseo",
  storageBucket: "pulseo.appspot.com",
  messagingSenderId: "688349292982",
  appId: "1:688349292982:web:4157219074a4aa9342f917"
};

// Initialize Firebase
let app; 
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}                                     
else{
  app = firebase.app();
}                     

const db = app.firestore(); 
const auth = firebase.auth();
export {db,auth};