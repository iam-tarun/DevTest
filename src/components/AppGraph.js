import React from 'react'
import './appGraph.css'
import {AiFillFolder} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'

// for Graph
import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 10);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      type: 'line',
      label: 'Applied',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'line',
      label: 'rejected',
      backgroundColor: 'rgb(255, 99, 132)',
      fill: true,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};

const AppGraph = () => {
    return (
        <div data-testid="appGraphComponent" className="appGraph">
           <div className="graphTabs">
                <div><span>Applications Recieved</span></div>
                <div className="options">
                    <span>This Year</span>
                    <span>This Week</span>
                    <span>Today</span>
                    <span> <AiFillFolder/> Download Report</span>
                    <span><BsThreeDotsVertical/></span>
                </div>
            </div>
           <div>
               <Bar data={data} height={120} />
           </div>
        </div>
    )
}

export default AppGraph
