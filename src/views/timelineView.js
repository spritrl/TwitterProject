import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import Timeline from '../components/timeline';
const TimelineView = ({ route, navigation }) => {

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
      <Navbar />
      <Timeline />
    </div >
  );
};

export default TimelineView;