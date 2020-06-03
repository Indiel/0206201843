import React from 'react';
import './profile.css';

const Profile = ({ name, position, photo, sentence }) => {
  const photoSrc = photo ? require(`./${photo}`) : '';

  return (
    <section className="profile wrapper">
      <img
        className="profile__photo"
        src={photoSrc}
        alt="Profile"
      />
      <div className="profile__info">
        <p className="profile__name">{name}</p>
        <p className="profile__position">{position}</p>
      </div>
      <p className="profile__sentence">{sentence}</p>
    </section>
  );
};

export default Profile;
