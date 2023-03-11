import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StarsCanvas } from './components';
import CanvasLoader from './components/Loader';

const LazyNavbar = lazy(() =>
	import('./components/Navbar')
);
const LazyHero = lazy(() => import('./components/Hero'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyExperience = lazy(() =>
	import('./components/Experience')
);
const LazyTech = lazy(() => import('./components/Tech'));
const LazyWorks = lazy(() => import('./components/Works'));
const LazyWordCloud = lazy(() =>
	import('./components/WordCloud')
);
const LazyFeedbacks = lazy(() =>
	import('./components/Feedbacks')
);
const LazyContact = lazy(() =>
	import('./components/Contact')
);
const LazyStarsCanvas = lazy(() =>
	import('./components/canvas/Stars')
);

function App() {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyNavbar />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyHero />
				</Suspense>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyAbout />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyExperience />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyTech />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyWorks />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyWordCloud />
			</Suspense>
			<LazyFeedbacks />
			<div className='relative z-0'>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyContact />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					{/* <LazyStarsCanvas /> */}
					<StarsCanvas />
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default App;
