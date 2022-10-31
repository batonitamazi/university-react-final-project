import React from 'react'
import './searchbar.css'

function Searchbar({search, handleSearch}) {
    return (
        <div className='searchbar'>
            <img src='./assets/icon-search.svg' alt='search' className='search--icon' />
            <input
                placeholder='Search for movies'
                className='search--input'
                defaultValue={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Searchbar