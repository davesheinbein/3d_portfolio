import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Works,
	StarsCanvas,
	Tech,
} from './components';

function App() {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</BrowserRouter>
	);
}

export default App;
