import { createSlice } from "@reduxjs/toolkit";


const initialState={
    text:"",
    photo:false,
    poll:false
}

const post = createSlice({
    name:"post",
    initialState,
    reducers:{
        Addtext(state,action){
        state.text=action.payload
    }

}
    


})

export const {Addtext} = post.actions

export default post.reducer

