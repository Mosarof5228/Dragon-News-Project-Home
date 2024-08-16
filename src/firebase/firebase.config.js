import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgQ1RD0gzuWDR-IIom4zSA1INJmWaaig",
  authDomain: "dragon-news-project-home-e7d6d.firebaseapp.com",
  projectId: "dragon-news-project-home-e7d6d",
  storageBucket: "dragon-news-project-home-e7d6d.appspot.com",
  messagingSenderId: "27965535116",
  appId: "1:27965535116:web:73c096e19ff337bdb91ca9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
