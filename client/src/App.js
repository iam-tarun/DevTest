import './App.css';
// components imports
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Title from './components/Title'
import TotalApps from './components/TotalApps';
import RejectedApps from './components/RejectedApps';
import Shortlist from './components/Shortlist';

function App() {
  return (
    <div className="App">
      <div id="sidebar"><Sidebar /></div>
     <div id="navbar"><Navbar/></div>
     <div id="title"><Title /></div>
     <div id="totalApps"><TotalApps /></div>
     <div id="shortList"><Shortlist/></div>
     <div id="rejected"><RejectedApps/></div>
     <div id="appGraph">application graph</div>
     <div id="appBarGraph" >application bar graph</div>
     <div id="referrals" >Referals</div>
     <div id="openPositions" >open Positions</div>
     <div id="newApps" >New Applications</div>
    </div>
  );
}

export default App;
