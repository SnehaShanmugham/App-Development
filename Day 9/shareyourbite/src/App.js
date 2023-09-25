import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Purchase from './pages/purhcase';
import Donate from './pages/donate';
import Volunteer from './pages/volunteer';
import Details from './pages/details';
import Login from './pages/login';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Home from './pages/home';


function App() {
return (
	<Router>
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/dashboard' element={<Dashboard/>} />
		<Route path='/donate' element={<Donate/>} />
		<Route path='/purchase' element={<Purchase/>} />
		<Route path='/volunteer' element={<Volunteer/>} />
		<Route path='/details' element={<Details/>} />
		<Route path='/signup' element={<SignUp/>}/>
		<Route path='/terms' element={<Terms/>}/>
		<Route path='/privacy' element={<Privacy/>}/>
	</Routes>
	</Router>
);
}

export default App;
