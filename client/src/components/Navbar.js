import React from 'react'
import './navbar.css'
import {MdNotifications} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import user from '../static/user.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="notifications"><MdNotifications/></div>
            <div className="user"><span>John Bayer</span></div>
            <div className="profile">
                <img src={user} alt="userPic" className="userPic" />
            </div>
            <div className="dropdown">
                <AiFillCaretDown />
            </div>
        </div>
    )
}

export default Navbar
