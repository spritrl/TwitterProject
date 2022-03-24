// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPcYoBvdB2yO6KBgQTJuNZDvaH2iqurDM",
  authDomain: "twitter-project-d5bb4.firebaseapp.com",
  projectId: "twitter-project-d5bb4",
  storageBucket: "twitter-project-d5bb4.appspot.com",
  messagingSenderId: "730874699464",
  appId: "1:730874699464:web:115e1f546ebf4008914ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(auth);