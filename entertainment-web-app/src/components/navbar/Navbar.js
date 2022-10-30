import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-items'>
            <img src='./assets/logo.svg' alt='logo' className='logo--img' id='movie' />
            <div className='category--items'> 
                <img src='./assets/icon-nav-home.svg' alt='home' className='category--img' />
                <img src='./assets/icon-nav-movies.svg' alt='home' className='category--img' />
                <img src='./assets/icon-nav-tv-series.svg' alt='home' className='category--img' />
                <img src='./assets/icon-nav-bookmark.svg' alt='home' className='category--img' />
            </div>
        </div>
        <img src='./assets/image-avatar.png' alt='avatar' className='avatar--img' id='avatar' />
    </div>
  )
}

export default Navbar