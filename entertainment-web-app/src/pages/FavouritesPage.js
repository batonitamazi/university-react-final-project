import React from 'react'
import {useSelector } from 'react-redux'
import RecomendedList from '../components/recomended/RecomendedList'


function FavouritesPage() {
  const favourites = useSelector((state) => state.favourites)
    return (
        <>
            <RecomendedList data={favourites.favourites.filter((item) => item.category === "Movie")} header="Bookmarked Movies"/>
            <RecomendedList  data={favourites.favourites.filter((item) => item.category === "TV Series")} header="Bookmarked Tv Series"/>
        </>
    )
}

export default FavouritesPage