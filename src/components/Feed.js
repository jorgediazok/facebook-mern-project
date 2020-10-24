import React from 'react';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';
import '../styles/Feed.css';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/47897689?s=460&u=0bb395d093ce35cd806306d0c62b1d86aebfbaa1&v=4"
        message="Wow, this works!"
        timestamp="2:30:22"
        username="jorgediazok"
        image="https://i2.wp.com/www.geoawesomeness.com/wp-content/uploads/2017/09/Coding-Geospatial.jpg?resize=1152%2C768&ssl=1"
      />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/47897689?s=460&u=0bb395d093ce35cd806306d0c62b1d86aebfbaa1&v=4"
        message="Wow, this ALSO works!"
        timestamp="2:30:23"
        username="jorgediazok"
        image="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/01/Despues-de-hackaton-banner2-7.png"
      />
    </div>
  );
}

export default Feed;
