import React from 'react'
import './totalApps.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowUpRight} from 'react-icons/im'

// circular progress bar
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TotalApps = () => {
    const percentage = 70;

    return (
        <div className="totalApps">
            <div className="top">
                <span>Total Applications</span>
                <BiDotsHorizontalRounded className="dropdown" style={{fontSize:'1.4rem'}} />
            </div>
            <div className="stats">
                <div className="numbers">
                    <span style={{fontSize:'1.4rem'}} >7956</span> <br/>
                    <span style={{color: '#c3f', fontSize:'0.6rem'}} ><ImArrowUpRight/> +3.39%</span>
                </div>
                <div style={{height:'100px', width:'100px'}} >
                <CircularProgressbar value={percentage} text={`+${percentage}%`}  styles={buildStyles({pathColor:'#c3f', textColor:'#c3f'})} />
                </div>
            </div>
        </div>
    )
}

export default TotalApps
