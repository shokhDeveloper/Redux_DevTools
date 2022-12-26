import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    posts: []
}
export const Reducers = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts(state, action){
            state.posts = action.payload
        }
    }
})
export const PostsAction = Reducers.actions
export const PostsReducers = Reducers.reducer