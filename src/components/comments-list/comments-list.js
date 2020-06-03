import React from 'react';
import './comments-list.css';

import Likes from '../likes/likes';
import Comments from '../comments/comments';

const CommentItem = ({ name, date, text }) => {
  return (
    <li className="comments-item">
      <p className="comments-item__name">{name}</p>
      <p className="comments-item__date">{date}</p>
      <p className="comments-item__text">{text}</p>
    </li>
  );
};

const CommentsList = ({ likes, comments, reviews }) => {
  const items = reviews 
    ? (reviews.map((item, i) => {
      return (
        <CommentItem key={i} name={item.name} date={item.date} text={item.text} />
      );
    }))
    : undefined;

  return (
    <section className="comments-list wrapper">
      <h3 className="comments-list__title">Последние отзывы</h3>
      <button className="comments-list__button-all">Все отзывы</button>
      <div className="comments-list__info">
        <Likes sum={likes} />
        <Comments sum={comments} />
      </div>
      <ul className="comments-list__list">
        {items}
      </ul>
    </section>
  );
};

export default CommentsList;
