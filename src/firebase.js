// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAPXWqFpDZ52ojT8x8WFaOwNZg2fYRT5M",
  authDomain: "planetchatt.firebaseapp.com",
  projectId: "planetchatt",
  storageBucket: "planetchatt.appspot.com",
  messagingSenderId: "1043261474537",
  appId: "1:1043261474537:web:9510040049a36674545278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)