import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { SvgIcon, Button } from "@material-ui/core";

import Navbar from '../components/navbar';
import TimelineTweetCard from './timlineTweetCard';
import PersonalProfileCard from './personalProfileCard'
import Tweet from './tweet';

const Profile = () => {
  const root = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 598,
    height: '100vh',
    margin: 0,
    borderRight: 'solid rgb(46, 51, 54) 2px',
    color: 'white',
  };

  const top = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 53,
    width: '100%',
    borderBottom: 'solid rgb(46, 51, 54) 2px',
  }

  const svg = {
    fontSize: 20,
  };

  const usernameTopSection = {
    display: 'flex',
    flexDirection: 'column'
  };

  const usernameTop = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  const tweetNumber = {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
  };

  const arrowButton = {
    width: '36px',
    height: '36px',
    borderRadius: 999,
  };

  const [messageList, setMessageList] = useState([]);

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  let username = query.get("username");

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('tweet')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        return documents;
      })
      .then(documents => {
        const tempList = [];
        documents.map(element => {
          if (element.username === username) {
            tempList.push(element);
          }
        });
        setMessageList(tempList);
        console.warn('messageList', messageList);
      })
  }, []);

  return (
    <div style={root}>
      <div style={top}>
        <Button style={arrowButton}>
          <SvgIcon style={svg} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill={'white'} fillRule="evenodd">
              <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
            </g>
          </SvgIcon>
        </Button>
        <div style={usernameTopSection}>
          <a style={usernameTop}>{username}</a>
          <a style={tweetNumber}>{messageList.length} Tweets</a>
        </div>
      </div>
      <PersonalProfileCard username={username}/>
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

export default Profile;