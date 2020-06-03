import React, { useState } from 'react';
import './writing-block.css';

const month = ['января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря'];

const WritingBlock = ({ onAddComment }) => {
  const [inputName, setInputName ] = useState('');
  const [textarea, setTextarea ] = useState('');

  const onChangeName = (evt) => {
    setInputName(evt.target.value);
  };

  const onChangeTextarea = (evt) => {
    setTextarea(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (inputName && textarea) {
      const date = new Date();
      const day = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
      onAddComment(inputName, day, textarea);
  
      setInputName('');
      setTextarea('');
    }
  };
  
  return (
    <section className="writing-block">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <input className="writing-block__input" name="name" type="text" value={inputName} onChange={onChangeName} placeholder="Имя" />
          <textarea className="writing-block__textarea" name="comment" value={textarea} onChange={onChangeTextarea}></textarea>
          <input className="writing-block__submit" type="submit" value="Написать консультанту" />
        </form>
      </div>
    </section>
  );
};

export default WritingBlock;
