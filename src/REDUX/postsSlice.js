import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            const newPosts = state.posts.filter((post) => post.id !== action.payload );
            state.posts = newPosts;
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map(post => post.id === action.payload.currentId? action.payload.post : post );
        }
    }
})


export const {addPost, deletePost,updatePost} = postsSlice.actions;
export default postsSlice.reducer;