import React from 'react'
import RecomendedList from '../components/recomended/RecomendedList'
import Searchbar from '../components/searchbar/Searchbar'
function ListPage({data, header}) {
    return (
        <div className='content--container'>
            <Searchbar />
            <RecomendedList data={data} header={hea}/>
        </div>
    )
}

export default ListPage