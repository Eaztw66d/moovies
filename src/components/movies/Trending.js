import React, { useContext, useEffect } from 'react';
import TrendingListItem from './TrendingListItem';
import MoviesContext from '../../context/moviesContext';

const Trending = () => {
  const moviesContext = useContext(MoviesContext);

  const { trending, trendingMovies } = moviesContext;

  useEffect(() => {
    trendingMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='trending-container'>
      <h2>What's Hot This Week!</h2>

      <div className='trending-movies'>
        {trending.map((movie) => (
          <TrendingListItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
