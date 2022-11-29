import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkQVDdW3LVLfzIHy8yP-jDsLSpCFLs8_c",
  authDomain: "netflix-clone-27b00.firebaseapp.com",
  projectId: "netflix-clone-27b00",
  storageBucket: "netflix-clone-27b00.appspot.com",
  messagingSenderId: "55838036485",
  appId: "1:55838036485:web:14d6630b5b5f917802c26c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
