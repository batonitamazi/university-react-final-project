import React from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import TrendingContainer from '../components/trendingvideos/TrendingContainer'
import RecomendedList from '../components/recomended/RecomendedList'
function MainPage({data}) {
    console.log(data)
    return (
        <div className='content--container'>
            <Searchbar />
            <TrendingContainer movies={data?.filter((item) => item.isTrending === true)} />
            <RecomendedList movies={data?.filter((item) => item.isTrending !== true)} />
        </div>
    )
}

export default MainPage