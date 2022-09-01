import { configureStore } from '@reduxjs/toolkit'
import counterReduce from '../features/counterSlice';
export const store = configureStore({
    reducer:{
        counter:counterReduce,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
 