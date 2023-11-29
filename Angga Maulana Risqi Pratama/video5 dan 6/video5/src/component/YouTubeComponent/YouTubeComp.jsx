import React from "react";
import './YouTubeComp.css';

const YouTubeComp = () => {
  return (
    <div className="youtube-wrapper">
      <div className="img-tumb">
        <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ4LBLdjTcwBxC9a8Gl0DGq7h7Pg" alt="" />
        <p className="time">7.20</p>
      </div>
      <p className="title">title here</p>
      <p className="desc">desc here</p>
    </div>
  );
};

export default YouTubeComp;
