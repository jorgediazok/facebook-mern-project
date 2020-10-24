import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import { AccountCircle, ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from '../context/StateProvider';

import '../styles/Post.css';

function Post({ profilePic, image, username, timestamp, message }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={user.photoURL} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{user.displayName}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="post-img" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
