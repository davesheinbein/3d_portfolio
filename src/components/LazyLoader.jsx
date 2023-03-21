import React from 'react';

function LazyLoader({ source }) {
	return (
		<div className='flex items-center justify-center h-40'>
			<img
				src={source}
				alt='Loading...'
				className='w-20 animate-spin-slow'
			/>
		</div>
	);
}

export default LazyLoader;
