import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Purchase from './pages/purhcase';
import Donate from './pages/donate';
import Volunteer from './pages/volunteer';
import Login from './pages/login';
import FeedbackForm from './pages/feedback';



function App() {
return (
	<Router>
	<Routes>
		<Route path='/' element={<Login/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/dashboard' element={<Dashboard/>} />
		<Route path='/donate' element={<Donate/>} />
		<Route path='/purchase' element={<Purchase/>} />
		<Route path='/volunteer' element={<Volunteer/>} />
		<Route path='/feedback' element={<FeedbackForm/>} />
		<Route path='/signup' element={<SignUp/>}/>
	</Routes>
	</Router>
);
}

export default App;
