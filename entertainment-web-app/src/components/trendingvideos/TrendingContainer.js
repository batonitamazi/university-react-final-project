import React from 'react'
import './trendingcontainer.css'

function TrendingContainer({ movies }) {
  return (
    <div className='trending--container'>
      <h1 className='trending--heading'>Trending</h1>
      <div className='rating--movies'>
        {movies.map((item, index) => {
          return (
            <div className='movie-card' key={index} style={{ backgroundImage: `url(${item.thumbnail.trending.large})` }}>
              <div className='bookmark--card'>
                <div className='bookmark--container'>
                  <img src='./assets/icon-bookmark-empty.svg' alt='bookmark' className='bookmark--icon' />
                </div>
              </div>
              <div>
                <span className='item--span'>{item.year} • <img src={item.category==="movie" ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} alt='movie' /> {item.category} • {item.rating}</span>
                <h1 className='card--heading'>{item.title}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrendingContainer