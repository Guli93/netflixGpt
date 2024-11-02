import React, { useEffect } from 'react'
import Header from './Header'
import useMovie from '../customHooks/useMovie'
import HomeFirstContainer from './HomeFirstContainer';
import MoveList from './MoveList';
import MovieContainer from './MovieContainer';
import { useTvShow } from '../customHooks/useTvShows';


const BrowserPage = () => {
  const getMovies=useMovie();
  const getTvShows=useTvShow();
  return (
    <div>
      <Header/>
      <HomeFirstContainer/>
      <MovieContainer/>
      
    </div>
  )
}

export default BrowserPage