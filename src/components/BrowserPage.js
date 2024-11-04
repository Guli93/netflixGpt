import React, { useEffect } from 'react';
import Header from './Header';
import useMovie from '../customHooks/useMovie';
import HomeFirstContainer from './HomeFirstContainer';
import MovieContainer from './MovieContainer';
import { useTvShow } from '../customHooks/useTvShows';
import { useSelector } from 'react-redux';
import GptContainer from './GptContainer';

const BrowserPage = () => {
  const getMovies = useMovie();
  const getTvShows = useTvShow();

  const toggle = useSelector((store) => store.gpt.gptSearch);

  return (
    <div>
      <Header />
      {toggle ? (
        <GptContainer />  
      ) : (
        <>
          <HomeFirstContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default BrowserPage;
