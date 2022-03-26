import { ConstructionOutlined } from '@mui/icons-material';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar';
import Profile from '../components/profile';
import { UserContext } from '../context/userContext';


const ProfileView = ({ route, navigation, username="toto" }) => {

  // Use the context to get the user
  const { currentUser } = useContext(UserContext);
  console.log('The current user data',currentUser.email);

  if(!currentUser) {
    return (
      <Navigate to="/auth" />
    );
  }

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
      <Navbar username={currentUser} />
      <Profile userData={currentUser} />
    </div >
  );
};

export default ProfileView;