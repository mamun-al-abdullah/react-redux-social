import { configureStore } from '@reduxjs/toolkit'

import feedReducer from '../features/feedSlice'

export const store = configureStore(
    {
        reducer : {
            feed: feedReducer
        }
    }
)
