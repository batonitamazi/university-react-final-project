import React from 'react'
import './recomended.css';

function RecomendedList({ data, header }) {
    return (
        <div className='trending--container'>
            <h1 className='trending--heading'>{header}</h1>
            <div className='recommended--movies'>
                {data?.map((item, index) => {
                    return (
                        <div className='recommended-movie-card' key={index}>
                            <div style={{ backgroundImage: `url(${item.thumbnail.regular.large})` }} className='recommended-movie-img'>
                                <div className='bookmark--card'>
                                    <div className='bookmark--container'>
                                        <img src={item.isBookmarked ?'./assets/icon-bookmark-full.svg' :'./assets/icon-bookmark-empty.svg'} alt='bookmark' className='bookmark--icon' />
                                    </div>
                                </div>
                            </div>
                            <div className='card--subcontainer'>
                                <span className='item--span'>{item.year} • <img src={item.category==="movie" ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} alt='movie' />   {item.category} • {item.rating}</span>
                                <h1 className='card--heading recommended-heading'>{item.title}</h1>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default RecomendedList