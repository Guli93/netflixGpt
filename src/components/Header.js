import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../utils/gptSlice';
import { allLang } from '../utils/constants';
import { changeLanguage } from '../utils/configueSlice';

const Header = () => {
    const user = useSelector((store) => store.user);
    const gptSearch=useSelector((store)=>store.gpt.gptSearch)
    const dispatch = useDispatch();

    const handleGptSearch = () => {
        dispatch(toggle());
    };
    const handleLanguage=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className='absolute px-10 py-2 z-20 bg-gradient-to-b from-gray-900 to-transparent w-full flex justify-between items-center'>
            <img
                className='w-48'
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
            />

            

            {user && (
                <div>
                <select onChange={handleLanguage} defaultValue="" className="bg-gray-200 border border-gray-300 rounded p-2 m-4 cursor-pointer z-30">
                <option value="" disabled>Select Language</option>
                {allLang.map((l)=><option  value={l.identifier}>{l.name}</option>)
                
                }

            </select>
               
                <button
                    onClick={handleGptSearch}
                    className='bg-white text-black text-center py-3 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none'
                >
                  {gptSearch? "Home Page" : "GPT Search"}
                </button>
                </div>
            )}
        </div>
    );
};

export default Header;

