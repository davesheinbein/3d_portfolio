import React, {
	Suspense,
	lazy,
	useState,
	useEffect,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StarsCanvas, LazyLoader } from './components';
import {
	cat,
	catDance,
	goku,
	jake,
	bmo,
	travolta,
	duck,
	dog,
	sun,
	skate,
	pokemon,
	thankyou,
} from './assets';
import Blog from './components/Blog';

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
	// <LazyLoader source={cat} />
	// <LazyLoader source={goku} />
	// <LazyLoader source={jake} />
	// <LazyLoader source={bmo} />
	// <LazyLoader source={travolta} />
	// <LazyLoader source={duck} />
	// <LazyLoader source={dog} />
	// <LazyLoader source={skate} />
	// <LazyLoader source={sun} />
	// <LazyLoader source={catDance} />
	// <LazyLoader source={pokemon} />
	// <LazyLoader source={thankyou} />
	return (
		<BrowserRouter>
			<div className='relative z-[100] bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
				<Suspense fallback={<LazyLoader source={jake} />}>
					<LazyNavbar isMobile={isMobile} />
				</Suspense>
				<Suspense fallback={<LazyLoader source={bmo} />}>
					<LazyHero isMobile={isMobile} />
				</Suspense>
			</div>
			<Suspense fallback={<LazyLoader source={cat} />}>
				<LazyAbout isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={goku} />}>
				<LazyExperience isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={travolta} />}>
				<LazyTech isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={sun} />}>
				<LazyWorks isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={duck} />}>
				<LazyWordCloud isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={catDance} />}>
				<LazyDivider isMobile={isMobile} />
			</Suspense>
			<Suspense fallback={<LazyLoader source={skate} />}>
				<Blog isMobile={isMobile} />
			</Suspense>
			<LazyFeedbacks />
			<div className='relative z-0'>
				<Suspense
					fallback={<LazyLoader source={thankyou} />}
				>
					<LazyContact isMobile={isMobile} />
				</Suspense>
				<Suspense
					fallback={<LazyLoader source={pokemon} />}
				>
					{/* <LazyStarsCanvas isMobile={isMobile} /> */}
					<StarsCanvas isMobile={isMobile} />
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default App;
