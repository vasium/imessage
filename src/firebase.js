import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2FC2RQzeDi-S-zEjj_YHk6gNzXEOatFs",
  authDomain: "myimessageapp-6a009.firebaseapp.com",
  projectId: "myimessageapp-6a009",
  storageBucket: "myimessageapp-6a009.appspot.com",
  messagingSenderId: "1053924437673",
  appId: "1:1053924437673:web:4d118da4bedee6423003b8",
  measurementId: "G-ZY9WD0XYRC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
