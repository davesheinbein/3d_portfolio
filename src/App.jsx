import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
	Hero,
	Navbar,
	WordCloud,
	About,
	Tech,
	Experience,
	Blog,
	Divider,
	Works,
	Feedbacks,
	Contact,
	EarthCanvas,
	BallCanvas,
	AnimatedCanvas,
	StarsCanvas,
	LazyLoader,
} from './components';
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
const LazyBlog = lazy(() => import('./components/Blog'));
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
	return (
		<BrowserRouter>
			<div className='relative z-[100] bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
				<Navbar />
				<Hero />
				{/* <Suspense fallback={<LazyLoader source={jake} />}>
					<LazyNavbar />
				</Suspense>
				<Suspense fallback={<LazyLoader source={bmo} />}>
					<LazyHero />
				</Suspense> */}
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<WordCloud />
			<Divider />
			<Blog />
			<Feedbacks />
			{/* <Suspense fallback={<LazyLoader source={cat} />}>
				<LazyAbout />
			</Suspense>
			<Suspense fallback={<LazyLoader source={goku} />}>
				<LazyExperience />
			</Suspense>
			<Suspense fallback={<LazyLoader source={travolta} />}>
				<LazyTech />
			</Suspense>
			<Suspense fallback={<LazyLoader source={sun} />}>
				<LazyWorks />
			</Suspense>
			<Suspense fallback={<LazyLoader source={duck} />}>
				<LazyWordCloud />
			</Suspense>
			<Suspense fallback={<LazyLoader source={catDance} />}>
				<LazyDivider />
			</Suspense>
			<Suspense fallback={<LazyLoader source={skate} />}>
				<LazyBlog />
			</Suspense>
			<Suspense fallback={<LazyLoader source={catDance} />}>
				<LazyFeedbacks />
			</Suspense> */}
			<div className='relative z-0'>
				<Contact />
				{/* <StarsCanvas /> */}
				{/* <Suspense
					fallback={<LazyLoader source={thankyou} />}
				>
					<LazyContact />
				</Suspense>
				<Suspense
					fallback={<LazyLoader source={pokemon} />}
				>
					<LazyStarsCanvas />
				</Suspense> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
