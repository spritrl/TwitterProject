import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPcYoBvdB2yO6KBgQTJuNZDvaH2iqurDM",
  authDomain: "twitter-project-d5bb4.firebaseapp.com",
  projectId: "twitter-project-d5bb4",
  storageBucket: "twitter-project-d5bb4.appspot.com",
  messagingSenderId: "730874699464",
  appId: "1:730874699464:web:115e1f546ebf4008914ffd"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
