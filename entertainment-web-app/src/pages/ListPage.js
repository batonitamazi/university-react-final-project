import React from 'react'
import RecomendedList from '../components/recomended/RecomendedList'
import Searchbar from '../components/searchbar/Searchbar'
function ListPage({data, header, setSearchKeyWord}) {
    setSearchKeyWord(`search for a ${header}`)
    return (
        <>
            <RecomendedList data={data} header={header}/>
        </>
    )
}

export default ListPage