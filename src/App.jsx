import React, {
	Suspense,
	lazy,
	useState,
	useEffect,
} from 'react';
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
const LazyDivider = lazy(() =>
	import('./components/Divider')
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
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			'(max-width: 500px)'
		);

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener(
			'change',
			handleMediaQueryChange
		);

		return () => {
			mediaQuery.removeEventListener(
				'change',
				handleMediaQueryChange
			);
		};
	}, []);
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyNavbar isMobile={isMobile} />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyHero isMobile={isMobile} />
				</Suspense>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyAbout isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyExperience isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyTech isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyWorks isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyWordCloud isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyDivider isMobile={isMobile} />
			</Suspense>
			<LazyFeedbacks />
			<div className='relative z-0'>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyContact isMobile={isMobile} />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					{/* <LazyStarsCanvas isMobile={isMobile} /> */}
					<StarsCanvas isMobile={isMobile} />
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default App;
