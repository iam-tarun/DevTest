import "./App.css";
import React from 'react';
// components imports
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import TotalApps from "./components/TotalApps";
import RejectedApps from "./components/RejectedApps";
import Shortlist from "./components/Shortlist";
import AppGraph from "./components/AppGraph";
import AppBarGraph from "./components/AppBarGraph";
import Referrals from "./components/Referrals";
import Open from "./components/Open";
import NewApp from "./components/NewApp";

function App() {
  return (
    <div className="App">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="navbar">
        <Navbar />
      </div>
      <div id="title">
        <Title />
      </div>
      <div id="totalApps">
        <TotalApps />
      </div>
      <div id="shortList">
        <Shortlist />
      </div>
      <div id="rejected">
        <RejectedApps />
      </div>
      <div id="appGraph">
        <AppGraph />
      </div>
      <div id="appBarGraph">
        <AppBarGraph />
      </div>
      <div id="referrals">
      <Referrals />
      </div>
      <div id="openPositions"> 
      <Open /> 
      </div>
      <div id="newApps">
       <NewApp/> 
       </div>
    </div>
  );
}

export default App;
