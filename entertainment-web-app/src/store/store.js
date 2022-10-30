import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../models/favourites"

export const store = configureStore({
    reducer: {
        favourites: favouritesReducer
    },
})
