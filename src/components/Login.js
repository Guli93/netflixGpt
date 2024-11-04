import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/Validation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bg } from "../utils/constants";


const Login = () => {
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const[isSignIn,setIsSignIn]=useState(true);
    const[error,setError]=useState(null);

    const email= useRef(null);
    const password=useRef(null);

    const handleButtonClick=(event)=>{
      event.preventDefault(); 
      const msg=validate(email.current.value,password.current.value);
      if(msg===null) {
        dispatch(addUser({email:email.current.value}))
        navigate('/browse');
      }
      setError(msg);
    }
    const toggleSignIn = (event) => {
        event.preventDefault(); 
        setIsSignIn(!isSignIn);
    }
    return (
       <div>
         <Header/>
         <div className="absolute">
          <img className="" src={bg} alt="BG"/>

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
         </div>   
        
          <form className="w-[30%] absolute bg-black mx-auto mt-20 text-white right-0 left-0 p-12 bg-opacity-80 text-center">
            <h1 className="text-3xl font-bold py-4">{isSignIn?"Sign in":"Sign up"}</h1>
            <input ref={email} type="text" placeholder="Email Address" className="p-4 m-3 w-full rounded bg-zinc-800 bg-opacity-70 border"/>
            <input ref={password} type="text" placeholder="Password" className="p-4 m-3 w-full rounded bg-zinc-800 bg-opacity-70 border"/>
            {!isSignIn && <input type="text" placeholder="Confirm Password" className="p-4 m-3 w-full rounded bg-zinc-800 bg-opacity-70 border"/>
            }
            <button onClick={handleButtonClick} className="p-3 m-3 bg-red-600 w-full rounded font-bold">Sign in</button>
            <p className="text-red-800">{error}</p>
            <div>OR</div>
            <button className="bg-zinc-800 w-full p-3 mx-3 my-4 rounded font-bold">use a sign in code</button>
            <div>Forgot password?</div>
            <div className="m-2 text-gray-400">{isSignIn?"New to Netflix?":"Already Registered"} <button onClick={toggleSignIn} className="text-white hover:underline">{isSignIn?"Sign up now":"Sign in now"}</button></div>
          </form>
      </div>   
    );
}

export default Login;
