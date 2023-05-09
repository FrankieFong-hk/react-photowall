// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9K3qK5vf3RgfHtdKC9OwAi-F26sXTAnk",
  authDomain: "photowall-ded55.firebaseapp.com",
  databaseURL: "https://photowall-ded55-default-rtdb.firebaseio.com",
  projectId: "photowall-ded55",
  storageBucket: "photowall-ded55.appspot.com",
  messagingSenderId: "1024558794876",
  appId: "1:1024558794876:web:2e7091777a02f31cbca1f9",
  measurementId: "G-N08W42EB5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
// const analytics = getAnalytics(app);

export {database} ;