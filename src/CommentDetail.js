import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
    <a href="/">
      <img src={props.avatar} alt="avatar"/>
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.content}</div>
    </div>
  </div>
  );
};

export default CommentDetail;