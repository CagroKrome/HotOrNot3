import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return fetch("https://ckhot.herokuapp.com/").then(res => res.json())
})

export const arrayReducer = createSlice({
    name: 'array',
    initialState: {
        array: [{text: null, likes: null}],
        status: null
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = false
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = true
            state.array = action.payload
            state.array.sort(() => Math.random() - 0.5)
        },
        [getPosts.rejected]: (state) => {
            state.status = false
        }
    }
})

export default arrayReducer.reducer
export const allPosts = (state) => state.array.array