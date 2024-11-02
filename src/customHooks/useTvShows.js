import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvShows } from "../utils/movieSlice";

export const useTvShow=()=>{
 const dispatch=useDispatch();

const handleTvShows= async()=>{
const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
const json= await data.json();
// console.log(json);
dispatch(addTvShows(json.results))

}
useEffect(()=>{
    handleTvShows();
},[])
}