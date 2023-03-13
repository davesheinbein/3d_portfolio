import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center'>
			<h1 className='rounded-lg relative text-4xl font-cursive pb-4x'>
				~ Give it a whirl! ~
			</h1>
			<div className='flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map((technology, index) => (
					<div
						className='w-28 h-28 cursor-move'
						key={technology.name}
					>
						<BallCanvas
							icon={technology.icon}
							name={technology.name}
							index={index}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, '');
