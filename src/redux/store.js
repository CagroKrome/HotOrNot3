import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import indexReducer from './indexReducer'
import arrayReducer from './arrayReducer'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        array: arrayReducer,
        index: indexReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
}, applyMiddleware(thunk))