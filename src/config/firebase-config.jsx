// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz3WnHdH1d3p381LmcceP_mVkw6-dl3VA",
  authDomain: "expense-tracker-d3e1f.firebaseapp.com",
  projectId: "expense-tracker-d3e1f",
  storageBucket: "expense-tracker-d3e1f.appspot.com",
  messagingSenderId: "1057762204152",
  appId: "1:1057762204152:web:8c98a4f07730317d8b9e0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)

//firebase login
//firebase init
//firebase deploy