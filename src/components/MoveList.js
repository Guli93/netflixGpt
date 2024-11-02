import React from 'react';
import MovieBox from './MovieBox';



const MoveList = ({title,movies}) => {
 

  return (
  movies &&  <div className='mx-8'>
      <h1 className='text-2xl py-2'>{title}</h1>
    <div className="flex overflow-x-scroll scrollbar-hide">
      {movies.map((movie) => (
        <MovieBox key={movie.id} img={movie.backdrop_path} />
      ))}
    </div>
  </div>
    
  );
};

export default MoveList;
