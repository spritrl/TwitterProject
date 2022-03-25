import React from 'react';

import TweetTweetCard from './timlineTweetCard';

const Tweet = ({ usernameInfo, textInfo }) => {
  const root = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 598,
    margin: 0,
    height: 'auto',
    borderBottom: 'solid rgb(46, 51, 54) 2px',
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
  }

  const tweetArea = {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
  };

  const profilePicture = {
    borderRadius: '100%',
    height: 50,
    width: 50,
    marginLeft: 10,
  };

  const content = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  };

  const userInfo = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const username = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  const usernameAt = {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  };

  const text = {
    marginTop: 5,
    fontSize: 15,
  };

  return (
    <div style={root}>
      <div style={tweetArea}>
        <img src="https://pbs.twimg.com/profile_images/3146747625/c57128ccade4faa5f28419771a7156f0_400x400.png" style={profilePicture} />
        <div style={content}>
          <div style={userInfo}>
            <a style={username}>{usernameInfo}</a>
            <a style={usernameAt}>@{usernameInfo}</a>
          </div>
          <a style={text}>{textInfo}</a>
        </div>
      </div>
    </div>
  );
};

export default Tweet;