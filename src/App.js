import React, { useEffect, useState } from 'react';
import './App.css';

import profiles from'./profiles.json';

import Profile from './components/profile/profile';
import Services from './components/services/services';
import CommentsList from './components/comments-list/comments-list';
import WritingBlock from './components/writing-block/writing-block';

function App() {
  const [ profile, setProfile ] = useState(0);
  const [ comments, setComments ] = useState();
  const [ reviews, setReviews ] = useState();

  useEffect(() => {
    console.log(profiles);
    setProfile(profiles[0]);
    setComments(profiles[0].comments);
    setReviews(profiles[0].reviews);
  }, []);

  const onAddComment = (name, date, text) => {
    console.log(reviews);
    setReviews([...reviews, { name, date, text } ]);
    setComments(comments + 1);
  };

  return (
    <div className="App">
      <Profile name={profile.name} position={profile.position} sentence={profile.sentence} photo={profile.photo} />
      <Services services={profile.services} />
      <CommentsList likes={profile.likes} comments={comments} reviews={reviews} />
      <WritingBlock onAddComment={onAddComment} />
    </div>
  );
}

export default App;
