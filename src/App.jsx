import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Skills,
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
			{/* <Skills /> */}
			<Feedbacks />
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</BrowserRouter>
	);
}

export default App;
