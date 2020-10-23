import React from 'react';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import '../styles/Feed.css';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;
