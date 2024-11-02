import React from 'react'
import Trailer from './Trailer'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import movies from '../utils/store'
import useMovie from '../customHooks/useMovie'

const HomeFirstContainer = () => {
  useMovie(); 
  const movies=useSelector((store)=> store.movies?.items);
  if (!movies || movies.length === 0) {
    return <p>Loading...</p>; 
  }

  const {original_title,overview ,id}=movies[0];

  return (
    <>
    <VideoTitle title={original_title} overview={overview} /> 
     <Trailer id={id}/>
   </>
  )
}

export default HomeFirstContainer