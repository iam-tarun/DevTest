import React from 'react'
import './totalApps.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowDownRight} from 'react-icons/im'

// circular progress bar
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RejectedApps = () => {
    const percentage = 40;

    return (
        <div className="totalApps">
            <div className="top">
                <span>Total Applications</span>
                <BiDotsHorizontalRounded className="dropdown" style={{fontSize:'1.4rem'}} />
            </div>
            <div className="stats">
                <div className="numbers">
                    <span style={{fontSize:'1.4rem'}} >1501</span> <br/>
                    <span style={{color: 'red', fontSize:'0.6rem'}} ><ImArrowDownRight/> -0.04%</span>
                </div>
                <div style={{height:'100px', width:'100px'}} >
                <CircularProgressbar value={percentage} text={`+${percentage}%`}  styles={buildStyles({pathColor:'red', textColor:'red'})} />
                </div>
            </div>
        </div>
    )
}

export default RejectedApps
