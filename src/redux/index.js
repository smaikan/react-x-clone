import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth'
import postReducer from './addpost'

export const store=configureStore({
    reducer:{   
        auth: authReducer,  
        post: postReducer,
    }
})