import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './features/storeSlice'

export const store=configureStore({
    reducer:{
        notes:notesReducer
    }
})