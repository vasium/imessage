import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CmkfnQpsVdpQS1pCEqfv4RXdjbcydSI",
  authDomain: "myimessageapp.firebaseapp.com",
  projectId: "myimessageapp",
  storageBucket: "myimessageapp.appspot.com",
  messagingSenderId: "419904199531",
  appId: "1:419904199531:web:62a1bea7b48d3c1bf98a2e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
