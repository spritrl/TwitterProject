import React from 'react';
import { Button } from "@material-ui/core";
import Navbar from '../components/navbar';
import Profile from '../components/profile';

const PersonalProfileCard = ({ username }) => {
  const root = {
    width: '100%',
    height: 424,
    borderBottom: 'solid rgb(46, 51, 54) 2px',
  };

  const backgroundImage = {
    height: 200,
    width: '100%',
  };

  const profilePicture = {
    height: 133,
    width: 133,
    borderRadius: '100%',
    marginTop: '-80px',
    marginLeft: 20,
  };

  const usernameTopSection = {
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'column'
  };
  
  const usernameTop = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  const usernameAt = {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  };

  const bottomButton = {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottom: 'solid rgb(29, 155,240) 3px',
  };

  const bottomButtons = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 75,
  };

  return (
    <div style={root}>
      <img style={backgroundImage} src="https://pbs.twimg.com/profile_banners/828197985729273857/1486293873/600x200"/>
      <img src="https://pbs.twimg.com/profile_images/3146747625/c57128ccade4faa5f28419771a7156f0_400x400.png" style={profilePicture} />
      <div style={usernameTopSection}>
        <a style={usernameTop}>{username}</a>
        <a style={usernameAt}>@{username}</a>
      </div>
      <div style={bottomButtons}>
        <Button style={bottomButton}>
          <a style={{color: 'white'}}>Tweets</a>
        </Button>
      </div>
    </div>
  );
};

export default PersonalProfileCard;