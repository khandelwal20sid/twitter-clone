import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2TTG1gOHDEctjBJkYFIgp8Q2zVrosmJs",
    authDomain: "twitter-clone-ab777.firebaseapp.com",
    projectId: "twitter-clone-ab777",
    storageBucket: "twitter-clone-ab777.appspot.com",
    messagingSenderId: "768579111198",
    appId: "1:768579111198:web:2b6f5a701840bdc342610f",
    measurementId: "G-P1L2DS1Q7Z"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;