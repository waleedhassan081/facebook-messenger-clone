import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLOweyZ79i8woSX4Sth1C8fVqbWK5CUUA",
    authDomain: "messenger-ab496.firebaseapp.com",
    databaseURL: "https://messenger-ab496.firebaseio.com",
    projectId: "messenger-ab496",
    storageBucket: "messenger-ab496.appspot.com",
    messagingSenderId: "1000239256772",
    appId: "1:1000239256772:web:4711ae30ffc572fad2a591",
    measurementId: "G-G1R12E8C9H",
});
const db = firebaseApp.firestore();
export default db;
