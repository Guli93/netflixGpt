import React, { useRef } from 'react';
import { bg } from '../utils/constants';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptContainer = () => {
    const langFromRedux = useSelector((store) => store.configue.language); 
    const ref=useRef(null);
    const handleGptSearch=()=>{
        console.log(ref.current.value)
    }

    return (
        <>
            <div className="absolute">
                <img className="" src={bg} alt="BG" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 w-full p-44 px-60">
                <div className='bg-black flex w-full p-3 my-auto'>
                    <input ref={ref} className='w-full p-3 m-2 rounded-lg' placeholder={lang[langFromRedux]?.gptSearch} />
                    <button  onClick={handleGptSearch} className='p-2 px-6 m-2 bg-red-600 text-white rounded-lg'>{lang[langFromRedux]?.search}</button>
                </div>
            </div>
        </>
    );
};

export default GptContainer;

