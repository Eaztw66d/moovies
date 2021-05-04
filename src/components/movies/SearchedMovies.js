import React, { useContext } from 'react';
import MoviesContext from '../../context/moviesContext'
import MovieListItem from './MovieListItem';

const SearchedMovies = () => {
    const moviesContext = useContext(MoviesContext);
    const { searched } = moviesContext;
    console.log(searched);

    return (
        <div className='searched-container'>
        <h2>Searched Movies</h2>
  
        <div className='searched-movies'>
          {searched.map((movie) => (
            <MovieListItem movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
}

export default SearchedMovies;