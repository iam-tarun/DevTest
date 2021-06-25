import React from 'react'
import './appBarGraph.css'
import ProgressBar from "@ramonak/react-progress-bar";


const AppBarGraph = () => {
    return (
        <div className="appBarGraph">
            <div className="barGraphTab" ><span>Total Applications</span></div>
            <div className="barItem">
            <li>Applications</li>
                <ProgressBar width="7rem" completed={60} bgColor='aliceblue' baseBgColor='gray' isLabelVisible={false} height='0.8rem' />
            </div>
            <div className="barItem">
            <li>Shortlisted</li>
                <ProgressBar width="7rem" completed={80} bgColor='blue' baseBgColor='gray' isLabelVisible={false} height='0.8rem' />
            </div>
            <div className="barItem">
            <li>Rejected</li>
                <ProgressBar width="7rem" completed={50} bgColor='red' baseBgColor='gray' isLabelVisible={false} height='0.8rem' />
            </div>
            <div className="barItem">
            <li>Ob hold</li>
                <ProgressBar width="7rem" completed={20} bgColor='white' baseBgColor='gray' isLabelVisible={false} height='0.8rem' />
            </div>
            <div className="barItem">
                <li>Finalised</li>
                <ProgressBar width="7rem" completed={25} baseBgColor='gray' isLabelVisible={false} height='0.8rem' />
            </div>
        </div>
    )
}

export default AppBarGraph
