import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Home from './components/pages/Home';
import Movie from './components/movies/Movie';
import SearchedMovies from './components/movies/SearchedMovies';
import MoviesState from './context/MoviesState';
import './App.css';



function App() {
  return (
    <MoviesState>
      <Router>
    <div className="App">
      <Header />
      <div className="inner-container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={SearchedMovies}/>
          <Route exact path='/movies/:title' component={Movie} />
        </Switch>
        
      </div>
    </div>
    </Router>
    </MoviesState>
  );
}

export default App;
