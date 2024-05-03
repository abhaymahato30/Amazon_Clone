// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZlKQIvfqERALeDXnhFXR1Tp8QkVjLtOg",
  authDomain: "clone-new-68afa.firebaseapp.com",
  projectId: "clone-new-68afa",
  storageBucket: "clone-new-68afa.appspot.com",
  messagingSenderId: "61938503663",
  appId: "1:61938503663:web:ac5610b0e04039b521701a",
  measurementId: "G-J5PF7KVEVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;