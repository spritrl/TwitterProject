import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import TimelineView from './views/timelineView';

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
    <div className="App">
      <TimelineView></TimelineView>
    </div>
  );
}

export default App;
