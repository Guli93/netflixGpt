import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
       items: null,
       videoItem:null,
       tvShows:null
    },
    
    reducers:{
        addMovies:(state,action)=>{
            state.items=action.payload;
        },
        addVideo:(state,action)=>{
            state.videoItem=action.payload;
        },
        addTvShows:(state,action)=>{
            state.tvShows=action.payload;
        }
    }
})

export const{addMovies,addVideo,addTvShows} =movieSlice.actions;
export default movieSlice.reducer;
