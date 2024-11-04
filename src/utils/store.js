import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import movieSlice from './movieSlice'
import gptSlice from './gptSlice'
import configueSlice from "./configueSlice";

const store=configureStore(
    {
        reducer:{
            user:userSlice,
            movies:movieSlice,
            gpt:gptSlice,
            configue:configueSlice,
        }
    }
)
export default store;