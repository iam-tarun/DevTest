import React from 'react'
import './newApp.css'
import {ReactComponent as OpenSVG} from '../static/open.svg'
import {FaGreaterThan} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {ImMail4} from 'react-icons/im'
import {IoCall} from 'react-icons/io5'
const NewApp = () => {
    return (
        <div className="newApp" >
            <h4>Hello John Bayer,</h4>
            <h5>You Have 8 New Applications Today !</h5>
            <OpenSVG style={{height:'150px', width:'130px'}} />
            <div className="newApplicants">
                <div className="newTab">
                    <div><span>New Applicants</span></div>
                    <div><FaGreaterThan/></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'1rem'}} >Rosie Metts</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'1rem'}} >James Scott</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'0.9rem'}} >Jamie Laurenson</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'1rem'}} >Elizabeth Hurton</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'1rem'}} >Danny Watson</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
                <div className="applicant" >
                    <div><CgProfile style={{fontSize:'2rem'}} /></div>
                    <div style={{flex:'1', margin:'0 1rem'}} >
                        <span style={{fontSize:'1rem'}} >Reha Scarlett</span> <br/>
                        <span style={{fontSize:'0.6rem', color:'blue'}} >Applied for Marketing Manage</span>
                    </div>
                    <div><ImMail4 style={{margin:'0 1rem'}} /></div>
                    <div><IoCall style={{margin:'0 1rem'}} /></div>
                </div>
            </div>
        </div>
    )
}

export default NewApp
