import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqO32B-iu3_lnGlz662N9CyAghixB1tI4",
  authDomain: "imessage-f2992.firebaseapp.com",
  projectId: "imessage-f2992",
  storageBucket: "imessage-f2992.appspot.com",
  messagingSenderId: "649991590559",
  appId: "1:649991590559:web:d9df0dc4b5a66b11e888aa",
  measurementId: "G-Y2657TEV05",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
