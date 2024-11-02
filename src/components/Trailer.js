import React from 'react';
import useVideo from '../customHooks/useVideo';
import { useSelector } from 'react-redux';

const Trailer = () => {
    useVideo(); 
    const trailer = useSelector((state) => state.movies?.videoItem);
    // console.log(trailer);

    return (
        <div className='w-full'>
            {trailer ? (

                <iframe className='w-full aspect-video'
                    src={`https://www.youtube.com/embed/${trailer[0]?.key}?controls=0&modestbranding=1&rel=0 &autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  
                ></iframe>
               
            ) : (
                <p>Loading...</p>
            )}
          
         
        </div>
    );
};

export default Trailer;
