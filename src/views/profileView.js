import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar';
import Profile from '../components/profile';
import { UserContext } from '../context/userContext';


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