import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import Timeline from '../components/timeline';

const TimelineView = ({ route, navigation, username="toto" }) => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Navbar username={username} />
      <Timeline />
    </div >
  );
};

export default TimelineView;