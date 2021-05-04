import React, { useReducer } from 'react';
import MoviesContext from './moviesContext';
import { movieReducer } from './moviesReducer';
import { LOAD_TRENDING, SEARCH_MOVIES, GET_MOVIE } from './types';

const MoviesState = (props) => {

  const initialState = {
    trending: [],
    searched: [],
    movie: {},
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  //* Load trending movies
  const trendingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    dispatch({
      type: LOAD_TRENDING,
      payload: data.results,
    });
  };

  //* Search Movies
  const searchMovies = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movie}&page=1`
    );
    const data = await res.json();
    
    dispatch({
      type: SEARCH_MOVIES,
      payload: data.results,
    });
    localStorage.setItem('movies', JSON.stringify(data));
  };

  //* Get movie information
  const getMovieInfo = async (title) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=1`
    );
    const data = await res.json();
    dispatch({
      type: GET_MOVIE,
      payload: data.results[0],
    });
    localStorage.setItem('movie', JSON.stringify(data.results[0]));
  };

  

  return (
    <MoviesContext.Provider
      value={{
        trending: state.trending,
        searched: state.searched,
        movie: state.movie,
        movieInfo: state.movieInfo,
        trendingMovies,
        searchMovies,
        getMovieInfo
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
