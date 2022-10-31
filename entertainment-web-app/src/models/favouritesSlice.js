import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

const initialState = {
    favourites: data.filter((item) => item.isBookmarked === true),
}
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addTofavourites: (state, action) => {
            state.favourites.push({...action.payload});
        },
        removeFavouriteItem: (state, action) => {
            const removeItem = state.favourites.filter((item) => item.id !== action.payload)
            state.favourites = removeItem;
        }
    }

})
export const  {addTofavourites, removeFavouriteItem} = favouritesSlice.actions

export default favouritesSlice.reducer