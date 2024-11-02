import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useVideo=()=>{
    const dispatch=useDispatch();
    const getVideo= async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/978796/videos?language=en-US', options)
     const json=await data.json();
    //  console.log(json);
    //  console.log(json.results[0].key);
     dispatch(addVideo(json.results));
   
    } 
    useEffect(()=>{
       getVideo();
    },[])
}
export default useVideo;