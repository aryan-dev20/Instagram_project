import React from 'react'
import { Link } from 'react-router-dom'
import notificationIcon from "../assets/icons/notification.png";
import messageIcon from '../assets/icons/envelope.png'


const Navbar = () => {
  return (
    <div>
        <section className="navbar-section">
            <nav className='navbar'>
                <div className='left'>
                   <a href='/' className='logo' >Instagram</a>
                </div>
                <div className='right'>
                    <Link to='/notification' className='noti-icon'>
                    <img src={notificationIcon} alt=""   />
                    </Link>

                    <Link to='/message' className='mess-icon'>
                    <img src={messageIcon} alt="" />
                    </Link>
                </div>
            </nav>
        </section>



    </div>
  )
}

export default Navbar