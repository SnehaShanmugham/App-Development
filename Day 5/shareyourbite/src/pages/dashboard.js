import React from 'react';
import Navbar from '../components/navbar/NavBar';

import './dashboard.css'

const Dashboard = () => {
	
return (
	<div>
		<Navbar></Navbar>
		
	

<div className='shadow-box-container'>
    <div className="shadow-box">
      <h1 className='dash-boxtext'>DONATIONS MADE</h1><br/>
	  <h1 className='dash-boxcount'>1</h1>
    </div>

    <div className="shadow-box">
      <h1 className='dash-boxtext'>DONATIONS UTILISED</h1><br/>
	  <h1 className='dash-boxcount'>1</h1>
    </div>
	
    <div className="shadow-box">
      <h1 className='dash-boxtext'>VOLUNTEERINGS DONE</h1><br/>
	  <h1 className='dash-boxcount'>2</h1>
    </div>
	
    <div className="shadow-box">
      <h1 className='dash-boxtext'>POINTS ACQUIRED</h1><br/>
	  <h1 className='dash-boxcount'>14</h1>
    </div>
	</div><br/><br/><br/><br/><br/>
	

	</div>
);
};

export default Dashboard;
