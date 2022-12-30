import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDHpS3xFkHFU9ymsLZ627jz5D_RH9c1z0o",
    authDomain: "revo-app-20509.firebaseapp.com",
    projectId: "revo-app-20509",
    storageBucket: "revo-app-20509.appspot.com",
    messagingSenderId: "139626996567",
    appId: "1:139626996567:web:d0365ad67e7665847b1412"
  };

  //init firebase 

  firebase.initializeApp(firebaseConfig)

  //init service

  const projectFirestore = firebase.firestore();
 const projectAuth = firebase.auth()
  export {projectFirestore,projectAuth}