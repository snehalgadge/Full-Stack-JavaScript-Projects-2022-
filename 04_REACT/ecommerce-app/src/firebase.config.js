// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKtmVlrGD-jBRKrGJySee-fZpSFUP6FjU",
  authDomain: "yt-df7e4.firebaseapp.com",
  projectId: "yt-df7e4",
  storageBucket: "yt-df7e4.appspot.com",
  messagingSenderId: "218556579082",
  appId: "1:218556579082:web:dfa55d600dec50c2b4cef3",
  measurementId: "G-SK02GGDY44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
