import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

const initialState = {
    favourites: data.filter((item) => item.isBookmarked === true),
    allData: data,
}
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addTofavourites: (state, action) => {
            const alreadyBookmarked = state.favourites.find((item) => item.title === action.payload.title)
            if (alreadyBookmarked) {
                const bookmarkItem = state.allData.find((item) => item.title === action.payload.title)
                bookmarkItem.isBookmarked = false;
                const removeItem = state.favourites.filter((item) => item.title !== action.payload.title)
                action.payload.isBookmarked = false
                state.favourites = removeItem;
            } else {
                const bookmarkItem = state.allData.find((item) => item.title === action.payload.title)
                bookmarkItem.isBookmarked = true;
                action.payload.isBookmarked = true;
                state.favourites.push({ ...action.payload })

            };
        },
        removeFavouriteItem: (state, action) => {
            const removeItem = state.favourites.filter((item) => item.id !== action.payload)
            state.favourites = removeItem;
        }
    }

})
export const { addTofavourites, removeFavouriteItem } = favouritesSlice.actions

export default favouritesSlice.reducer