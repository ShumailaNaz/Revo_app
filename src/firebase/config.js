import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// import 'firebase/auth'



// const firebaseConfig = {
//     apiKey: "AIzaSyDHpS3xFkHFU9ymsLZ627jz5D_RH9c1z0o",
//     authDomain: "revo-app-20509.firebaseapp.com",
//     projectId: "revo-app-20509",
//     storageBucket: "revo-app-20509.appspot.com",
//     messagingSenderId: "139626996567",
//     appId: "1:139626996567:web:d0365ad67e7665847b1412"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyA1QZcsskEq2l5bDRuWmsu97wABGxKdVoc",
  authDomain: "revo-app-f4439.firebaseapp.com",
  projectId: "revo-app-f4439",
  storageBucket: "revo-app-f4439.appspot.com",
  messagingSenderId: "598131821989",
  appId: "1:598131821989:web:27b509bf358311cc532c4c"
};

  //init firebase 

  firebase.initializeApp(firebaseConfig)

  //init service

  const projectFirestore = firebase.firestore();
 const projectAuth = firebase.auth()
// TImestamp
const timestamp = firebase.firestore.Timestamp

  export {projectFirestore,projectAuth,timestamp }