import React, { useContext, useEffect, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import TimelineTweetCard from './timlineTweetCard';
import Tweet from './tweet';
import { UserContext } from '../context/userContext';


const Timeline = ({ route, navigation }) => {

  const [messageList, setMessageList] = useState([]);
  const { currentUser } = useContext(UserContext);
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
    db.collection('tweet')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        setMessageList(documents);
        console.warn('messageList', messageList);
      })
  }, []);

  return (
    <div style={root}>
      <TimelineTweetCard />
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