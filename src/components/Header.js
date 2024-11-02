import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
   const user= useSelector((state)=>state.user);
//    console.log(user.email);
    return (
        <div className='absolute px-10 py-2  z-10 bg-gradient-to-b from-black w-full'>
            <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />


        </div>
    )
}

export default Header;