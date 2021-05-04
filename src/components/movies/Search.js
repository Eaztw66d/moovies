import React, { useState, useContext } from 'react';
import MoviesContext from '../../context/moviesContext';

const Search = (props) => {
  const moviesContext = useContext(MoviesContext);
  const [movie, setMovie] = useState('');

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (movie === '') {
      return null;
    } else {
      moviesContext.searchMovies(movie);
      setMovie('');
    }
  };

  return (
    <div className='search-hero'>
      <div className='overlay'></div>
      <h1>Welcome</h1>
      <h3>Millions of movies to discover. Explore now.</h3>
      <form className='search-field' onSubmit={onSubmit}>
        <input
          type='text'
          name='movie'
          value={movie}
          onChange={handleChange}
          placeholder='Search for a movie...'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
