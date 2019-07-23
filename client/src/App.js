import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = props => {
    props.history.push(`/movies/:id`, setSavedList)
    setSavedList( [...savedList, props.movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route 
          exact path="/"
          render={props => <Movie {...props} movieList={movieData} />}
        />
        <Route 
          path="/movies/:id"
          render={props => <Movie {...props} movieList={movieData} />}
        />
      </div>
    </Router>
  );
};

export default App;
