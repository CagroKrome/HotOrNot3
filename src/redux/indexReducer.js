import { createSlice } from "@reduxjs/toolkit";

export const indexReducer = createSlice({
    name: 'index',
    initialState: 0,
    reducers: {
        increment: (state) => (
            state+1
        )
    }
})

export const { increment } = indexReducer.actions

export default indexReducer.reducer