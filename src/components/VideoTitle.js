import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' aspect-video pt-44 pl-16 w-full absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-4xl font-bold my-2'>{title}</h1>
    <p className='text-lg w-1/2 mt-4'>{overview}</p>
    <div className='mt-5'>
        <button className='bg-white py-3 px-10 mr-2 rounded text-black'>▶ play </button>
        <button className='bg-gray-500 py-3 px-10 m-2 rounded text-white'>My List</button>
    </div>
    </div>
  )
}

export default VideoTitle