import React from 'react';
import './comments.css';

const Comments = ({ sum }) => {
  return (
    <div className="comments">
      <img className="comments__img" src={require('./comment.png')} alt="Comments"></img>
      <span className="comments__sum">{sum}</span>
    </div>
  );
};

export default Comments;
