import React from 'react'
import './shortlist.css'

import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowUpRight} from 'react-icons/im'

// circular progress bar
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Shortlist = () => {
    
    const percentage = 60;

    return (
        <div className="shortlist" >
            <div className="shortlistHeadings">
                <span>Shortlisted Candidates</span>
                <BiDotsHorizontalRounded className="dropdown" style={{fontSize:'1.4rem'}} />
            </div>
            <div className="shortlistStats">
                <div className="shortlistNumbers" >
                <span style={{fontSize:'1.4rem'}} >4658</span> <br/>
                <span style={{fontSize:'0.6rem'}} ><ImArrowUpRight/> +06%</span>
                </div>
                <div style={{height:'100px', width:'100px'}} >
                <CircularProgressbar value={percentage} text={`+${percentage}%`}  styles={buildStyles({pathColor:'#fff', textColor:'#fff'})} />
                </div>
            </div>
        </div>
    )
}

export default Shortlist
