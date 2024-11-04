import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearch:false,
    },
    reducers:{
        toggle:(state)=>{
            state.gptSearch=!state.gptSearch;
        }
    }
})

export default gptSlice.reducer;
 export const {toggle}=gptSlice.actions;