import { useEffect } from "react";
import { options } from '../utils/constants'
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

const useMovie=()=>{
    const dispatch = useDispatch();
    const getMovies = async() => {
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json=await data.json();
        // console.log(json.results);
      
        dispatch(addMovies(json.results));
       
      }
    
      useEffect(()=>{
        getMovies();
      },[])
}
export default useMovie;