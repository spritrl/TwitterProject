import React, { useEffect, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import TimelineTweetCard from './timlineTweetCard';
import Tweet from './tweet';

const Timeline = ({ username }) => {

  const [messageList, setMessageList] = useState([]);

  const root = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 598,
    height: '100vh',
    margin: 0,
    borderRight: 'solid rgb(46, 51, 54) 2px',
    paddingTop: 30,
    color: 'white',
  };

  useEffect(() => {
    const db = firebase.firestore();
    let tempList = [];
    db.collection('tweet')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        tempList = documents;
        return tempList;
      })
      .then(tempList => {
        tempList.sort(function compare(a, b) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateB - dateA;
        });
      })
      .then(() => {
        setMessageList(tempList)
      })
  }, []);

  return (
    <div style={root}>
      <TimelineTweetCard username={username} />
      {messageList.map(element => (
        <Tweet
          key={`${element.username}-${element.description}`}
          usernameInfo={element.username}
          textInfo={element.description}
        />
      ))}
    </div>
  );
};

export default Timeline;