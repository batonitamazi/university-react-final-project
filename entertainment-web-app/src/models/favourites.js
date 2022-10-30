import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
}
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addTofavourites: (state, action) => {
            const newMovie = action.payload
            return {...state, newMovie}
        }   
    }
})
export const  {addTofavourites} = favouritesSlice.actions

export default favouritesSlice.reducer