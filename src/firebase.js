// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1gAwZ86JWiXMHtYEyqmCrTGHZxod4KNc",
  authDomain: "tvi-project-d7c88.firebaseapp.com",
  projectId: "tvi-project-d7c88",
  storageBucket: "tvi-project-d7c88.appspot.com",
  messagingSenderId: "1054220028028",
  appId: "1:1054220028028:web:be764679c89ba5f7d021f9",
  measurementId: "G-GS0ED6KJC7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);
export const auth = getAuth(app);
export default app;