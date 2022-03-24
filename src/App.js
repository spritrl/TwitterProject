import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Auth/Login/Login';
import Hold from './components/hold/Hold';
import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import { UserContextProvider } from './context/userContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import TimelineView from './views/timelineView';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Auth/Login/Login';
import Hold from './components/hold/Hold';
import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import { UserContextProvider } from './context/userContext';

function App() {
  useEffect(() => {
    const db = firebase.firestore();
    db.collection('tweet')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        console.warn(documents);
      })
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hold />} />
        <Route path="/timeline" element={<TimelineView />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
