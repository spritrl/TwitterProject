import React from 'react';

import Navbar from '../components/navbar';
import Profile from '../components/profile';

const ProfileView = ({ route, navigation, username="toto" }) => {
  const root = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  return (
    <div style={root}>
      <Navbar username={username} />
      <Profile />
    </div >
  );
};

export default ProfileView;