import React, { useContext } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import MoviesContext from '../../context/moviesContext';

const MovieListItem = ({ movie, match }) => {
  const moviesContext = useContext(MoviesContext);
  const { getMovieInfo } = moviesContext;
  const { title, release_date, poster_path, vote_average } = movie;

  const onClick = (e) => {
    getMovieInfo(e.target.innerText);
  };

  return (
    <div className='searched-movie-card'>
      <div className='thumbnail'>
        <div className='rating'>{vote_average}</div>

        <img
          src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : 'https://yanktontrailers.com/wp-content/uploads/2020/02/noimage.png'}
          alt='movie-poster'
        />
      </div>
      <Link to={`/movies/${title}`}>
        <h4 onClick={onClick}>{title}</h4>
      </Link>
      <small>Release Date: {moment(release_date).format('ll')}</small>
    </div>
  );
};

export default MovieListItem;
