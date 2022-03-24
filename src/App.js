import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import TimelineView from './views/timelineView';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Hold from './components/hold/Hold';

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
        <Route path="login" element={<Login />} />
        <Route path="/timeline" element={<TimelineView />} />
      </Routes>
    </>
  );
}

export default App;
