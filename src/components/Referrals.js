import React from 'react'
import './referrals.css'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {ImArrowUpRight} from 'react-icons/im'

const Referrals = () => {
    return (
        <div data-testid="referrals" className="referrals" >
            <div className="referralsHeadings" >
                    <span style={{flex:'1', fontWeight:'600'}} >Referrals and Campaign Stats</span>
                    <div>
                    <IoPaperPlaneOutline style={{margin:'0.5rem', color:'red'}} />
                        <span style={{color:'red'}} >40 Campaigns sent in total</span> 
                        <br/>
                        <span>4 Campaigns sent in last month</span>
                    </div>
            </div>
            <div className="campaignStats">
                <div className="campaignItem" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}} >
                    <span style={{fontSize:'0.8rem', fontWeight:'600'}} >User'sReached</span> <br/>
                    <span style={{color:'blue', fontSize:'0.5rem'}} > <ImArrowUpRight/>  +3.59%</span><br/>
                    <span style={{fontWeight:'700'}} >7956</span>
                </div>
                <div className="campaignItem" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}} >
                    <span style={{fontSize:'0.8rem', fontWeight:'600'}} >Referrals</span> <br/>
                    <span style={{color:'blue', fontSize:'0.5rem'}} > <ImArrowUpRight/>  +9.01%</span><br/>
                    <span style={{fontWeight:'700'}} >0662</span>
                </div>
                <div className="campaignItem" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}} >
                    <span style={{fontSize:'0.8rem', fontWeight:'600'}} >Shares</span> <br/>
                    <span style={{color:'blue', fontSize:'0.5rem'}} > <ImArrowUpRight/>  +39.18%</span><br/>
                    <span style={{fontWeight:'700'}}>1478</span>
                </div>
                <div className="campaignItem" >
                    <span style={{fontSize:'0.8rem', fontWeight:'600'}} >Applications</span> <br/>
                    <span style={{color:'blue', fontSize:'0.5rem'}} > <ImArrowUpRight/>  +12%</span><br/>
                    <span style={{fontWeight:'700'}} >0564</span>
                </div>
            </div>
            <div className="campaignOptions">
                <button style={{backgroundColor:'#06f'}}>Start a new Campaign now</button>
                <button style={{backgroundColor:'#ff4d4d'}} >Pause All Running Campaigns</button>
            </div>
        </div>
    )
}

export default Referrals
