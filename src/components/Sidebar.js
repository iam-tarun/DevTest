import React from 'react'
import './sidebar.css'
import {AiFillHome, AiFillFolder} from 'react-icons/ai'
import {RiBarChartBoxFill, RiBriefcase4Line} from 'react-icons/ri'
import {FaRegCalendarCheck, FaSignOutAlt} from 'react-icons/fa'
import {BsPeople} from 'react-icons/bs'
import {IoChatboxEllipsesSharp} from 'react-icons/io5'
import {DiJqueryLogo} from 'react-icons/di'
import {FiSettings} from 'react-icons/fi'

const Sidebar = () => {
    return (
        <div data-testid="sidebar" className="sidebar">
            <div className="logo">
                <DiJqueryLogo />
            </div>
            <div className="menu">
                <div className="menuButton"><AiFillHome className="menuIcon" id="home" /></div>
                <div className="menuButton"><RiBarChartBoxFill className="menuIcon" id="chart" /></div>
                <div className="menuButton"><RiBriefcase4Line className="menuIcon" id="case" /></div>
                <div className="menuButton"><AiFillFolder className="menuIcon" id="folder" /></div>
                <div className="menuButton"><FaRegCalendarCheck className="menuIcon" id="calendar" /></div>
                <div className="menuButton"><BsPeople className="menuIcon" id="people" /></div>
                <div className="menuButton"><IoChatboxEllipsesSharp className="menuIcon" id="chat" /></div>
                <div className="menuButton"><FaSignOutAlt className="menuIcon" id="logOut" /></div>
            </div>
            <div className="settings"><FiSettings/></div>
        </div>
    )
}

export default Sidebar
