import React, { useRef } from 'react';
import { Button, Input } from "@material-ui/core";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const TimelineTweetCard = ({ username }) => {

  const topCard = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 598,
    height: 108,
    marginTop: 20,
    borderBottom: 'solid rgb(46, 51, 54) 2px',
  };

  const profilePicture = {
    borderRadius: '100%',
    height: 50,
    width: 50,
    marginLeft: 10,
  };

  const tweetArea = {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
  };

  const textArea = {
    marginLeft: 10,
    borderBottom: 'solid red 0px',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
  };

  const header = {
    display: 'flex',
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  };

  const bottomBar = {
    display: 'flex',
    flexDirection: 'row',
  };

  const tweetButton = {
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: 'rgb(29, 155,240)',
    width: 90,
    height: 36,
    borderRadius: 9999,
    textTransform: 'none',
  };

  const text = {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'none',
  };

  const inputRef = useRef('');

  const createNewTweet = () => {
    const db = firebase.firestore();
    const today = new Date();
    const dateValue = 
      today.getFullYear() + '-' +
      (today.getMonth()+1)+ '-' +
      today.getDate() + ' ' +
      today.getHours() + ":" +
      today.getMinutes() + ":" +
      today.getSeconds();
    console.warn(inputRef.current.value);
    if (inputRef.current.value != '') {
      db.collection('tweet').add({
        description: inputRef.current.value,
        username: username,
        date: dateValue,
      })
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <a style={header}>Home</a>
      <div style={topCard} >
        <div style={tweetArea}>
          <img src="https://pbs.twimg.com/profile_images/3146747625/c57128ccade4faa5f28419771a7156f0_400x400.png" style={profilePicture} />
          <Input
            inputRef={inputRef} 
            style={textArea}
            placeholder="What's up?"
            disableUnderline={true} />
          <div style={bottomBar}>
          </div>
        </div>
        <Button style={tweetButton} onClick={createNewTweet}>
          <a style={text}>Tweet</a>
        </Button>
      </div >
    </>
  );
};

export default TimelineTweetCard;