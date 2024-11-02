import React from 'react'
import MoveList from './MoveList'
import { useSelector } from 'react-redux';
const MovieContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (movies === null) return null;
  return (
    <div className='bg-black text-white'>
    <div className='relative -mt-52 z-10'>
        <MoveList title={"Now playing Movies"} movies={movies?.items}/>
        <MoveList title={"Popular TV Shows"} movies={movies.tvShows}/>
        <MoveList title={"Top rated Movies"} movies={movies?.items}/>
        <MoveList title={"Horror Movies"}movies={movies?.items}/>
    </div>
    </div>
  )
}

export default MovieContainer
