import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBp4I23LLyOVzwqyq6xd8sA7vxxr0iXPsM",
    authDomain: "whatsapp-aded6.firebaseapp.com",
    databaseURL: "https://whatsapp-aded6.firebaseio.com",
    projectId: "whatsapp-aded6",
    storageBucket: "whatsapp-aded6.appspot.com",
    messagingSenderId: "1013872626658",
    appId: "1:1013872626658:web:37cf2e50b87dfd619687bb",
    measurementId: "G-7EZTZBQYCZ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;