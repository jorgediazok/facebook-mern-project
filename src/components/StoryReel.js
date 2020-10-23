import React from 'react';
import Story from '../components/Story';
import '../styles/StoryReel.css';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/3/39/C_Hello_World_Program.png"
        profileSrc="https://avatars0.githubusercontent.com/u/15804673?s=460&u=1b492bc5e6c055f6e9718e28406eb9633938d4d7&v=4"
        title="Cris Salerno"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKL5wUNu1Ybc7DbOAaPPqVX3tjCrbQLmPiow&usqp=CAU"
        profileSrc="https://avatars2.githubusercontent.com/u/35818639?s=460&u=59b264afe42fbd6dc9aced735901be167225adad&v=4"
        title="Leo Hanc"
      />
      <Story
        image="https://i.pinimg.com/474x/85/d5/e1/85d5e15b8b8529fa94e949cacc9a140f.jpg"
        profileSrc="https://avatars2.githubusercontent.com/u/176013?s=460&u=1d436e62dc32dbbf1bfefb4d658cd67553154c42&v=4"
        title="Wes Bos"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjssw5Mxb3zkYLcgE3vLCWNwOXfru-nQ9aZw&usqp=CAU"
        profileSrc="https://avatars2.githubusercontent.com/u/5003903?s=460&v=4"
        title="Stephen Grider"
      />
      <Story
        image="https://unsdg.un.org/sites/default/files/styles/resource_thumbnail/public/Resource-Book-for-Mainstreaming-Gender-in-UN-Common-Programming-Country-Level.jpg?itok=09U9SGJd"
        profileSrc="https://avatars0.githubusercontent.com/u/2281088?s=460&u=84b646c98eb14480c53987c23901b0001652d9d7&v=4"
        title="Sarah D"
      />
    </div>
  );
}

export default StoryReel;
