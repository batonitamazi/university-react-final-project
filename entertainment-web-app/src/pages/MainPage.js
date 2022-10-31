import React from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import TrendingContainer from '../components/trendingvideos/TrendingContainer'
import RecomendedList from '../components/recomended/RecomendedList'
function MainPage({data}) {
    return (
        <div className='content--container'>
            <TrendingContainer movies={data?.filter((item) => item.isTrending === true)} />
            <RecomendedList data={data?.filter((item) => item.isTrending !== true)} header="Recommended for you"/>
        </div>
    )
}

export default MainPage