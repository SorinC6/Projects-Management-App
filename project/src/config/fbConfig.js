import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNPtcaj26mDPgn5U8h-6FJQFU1-DA5A7U",
  authDomain: "projects-plan-486dc.firebaseapp.com",
  databaseURL: "https://projects-plan-486dc.firebaseio.com",
  projectId: "projects-plan-486dc",
  storageBucket: "projects-plan-486dc.appspot.com",
  messagingSenderId: "1044138337283",
  appId: "1:1044138337283:web:d5b8430727f814d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
