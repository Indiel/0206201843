import React from 'react';
import './likes.css';

const Likes = ({ sum }) => {
  return (
    <div className="likes">
      <img className="likes__img" src={require('./like.png')} alt="like"></img>
      <span className="likes__sum">{sum}</span>
    </div>
  );
};

export default Likes;
