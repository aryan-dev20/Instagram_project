import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/icons/house.png'
import searchIcon from '../assets/icons/search.png'
import plusIcon from '../assets/icons/plus.png'
import reelIcon from '../assets/icons/play-button.png'
import userIcon from '../assets/icons/user.png'

const Footer = () => {
  return (
    <div className='footer-section'>
    <Link to="/" className='icon' >
    <img src={homeIcon} alt="" />
    </Link>

    <Link className='icon' >
    <img src={searchIcon} alt="" />
    </Link>

    <Link to='/post' className='icon' >
    <img src={plusIcon} alt="" />
    </Link>

    <Link className='icon' >
    <img src={reelIcon} alt="" />
    </Link>

    <Link to='/feed' className='icon' >
    <img src={userIcon} alt="" />
    </Link>

    </div>
  )
}

export default Footer