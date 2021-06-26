import React from 'react'
import './title.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiPlusMedical} from 'react-icons/bi'

const Title = () => {
    return (
        <div data-testid="title" className="title">
           <div className="dashboard">
               <h3>Dashboard</h3>
               <span>Monday, </span><span style={{color:'blue'}} >02 July 2020</span>
           </div>
           <div className="search">
               <button><BiPlusMedical className="addIcon" />Add</button>
                <AiOutlineSearch />
                <input type='text' placeholder='Search for Application here' />
           </div>
        </div>
    )
}

export default Title
