import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from '../models/favouritesSlice'
export const store = configureStore({
    reducer: {
        favourites: favouritesReducer,
    },
})
