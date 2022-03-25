import React from 'react';

import TimelineTweetCard from './timlineTweetCard';
import Tweet from './tweet';

const Timeline = ({ route, navigation }) => {
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

  return (
    <div style={root}>
      <TimelineTweetCard />
      <Tweet usernameInfo={'test'} textInfo={'content info'} />
    </div>
  );
};

export default Timeline;