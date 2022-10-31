import React from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import TrendingContainer from '../components/trendingvideos/TrendingContainer'
import RecomendedList from '../components/recomended/RecomendedList'
function MainPage({data}) {
    return (
        <>
            <TrendingContainer movies={data?.filter((item) => item.isTrending === true)} />
            <RecomendedList data={data?.filter((item) => item.isTrending !== true)} header="Recommended for you"/>
        </>
    )
}

export default MainPage