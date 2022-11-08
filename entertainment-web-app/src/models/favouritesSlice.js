import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

const initialState = {
    favourites: data.filter((item) => item.isBookmarked === true),
    allInfo: data.map((item) => item)
    
}
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addTofavourites: (state, action) => {
            const alreadyBookmarked = state.favourites.find((item) => item.title === action.payload.title)
            if (alreadyBookmarked) {
                const removeItem = state.favourites.filter((item) => item.title !== action.payload.title)
                action.payload.isBookmarked = false
                state.favourites = removeItem;
            } else {
                state.favourites.push({ ...action.payload })
                
            };
        },
        removeFavouriteItem: (state, action) => {
            const removeItem = state.favourites.filter((item) => item.id !== action.payload)
            state.favourites = removeItem;
        }
    }

})
export const  {addTofavourites, removeFavouriteItem} = favouritesSlice.actions

export default favouritesSlice.reducer