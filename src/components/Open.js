import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import './open.css'
import { Doughnut } from 'react-chartjs-2';

const data = {
    datasets: [
      {
        label: 'open positions',
        data: [45, 30, 25],
        backgroundColor: [
          'rgba(255, 0, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const Open = () => {
    return (
        <div className="open">
            <div className="openTab">
                <div><span style={{fontSize:'0.6rem', fontWeight:'600'}} >Open Positions by Department</span></div>
                <div><BiDotsHorizontalRounded className="dropdown" style={{fontSize:'1.4rem'}} /></div>
            </div>
            <Doughnut data={data} />
        </div>
    )
}

export default Open
