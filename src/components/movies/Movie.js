import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import MoviesContext from '../../context/moviesContext';

const Movie = (props) => {
  const moviesContext = useContext(MoviesContext);
  const { movie, getMovieInfo } = moviesContext;
  const {
    poster_path,
    backdrop_path,
    title,
    vote_average,
    overview,
    release_date,
  } = movie;

  useEffect(() => {
    getMovieInfo(props.match.params.title || title);
  }, [getMovieInfo, props.match.params.title]);

  return (
    <div className='movie-card-container'>
      <div
        className='movie-card'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className='movie-poster'>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : 'https://yanktontrailers.com/wp-content/uploads/2020/02/noimage.png'
            }
            alt='poster'
          />
        </div>
        <div className='movie-details'>
          <div>
            <div className='col movie-title-date'>
              <h1>{title}</h1>
              <p className='small-text'>
                Released: {moment(release_date).format('ll')}
              </p>
            </div>
            <div className='col movie-rating'>
              <div className='average-rating'>{vote_average}</div>
            </div>
            <div className='movie-summary'>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
