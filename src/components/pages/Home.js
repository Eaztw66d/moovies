import React, {Fragment, useContext} from 'react';
import Search from '../movies/Search';
import Trending from '../movies/Trending';
import SearchedMovies from '../movies/SearchedMovies';
import MoviesContext from '../../context/moviesContext';

const Home = () => {
    const moviesContext = useContext(MoviesContext);
    const { searched } = moviesContext;
    return (
        <Fragment>
        <Search />
        {
            searched.length > 0 ? <SearchedMovies/> : <Trending />
        }
    </Fragment>
    )
}
    


export default Home;