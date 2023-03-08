import React, { useCallback, useRef } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { select } from 'd3-selection';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { skills } from '../constants';

const Skills = () => {
	const textRef = useRef(null);
	const getCallback = useCallback((callback) => {
		return function (word, event) {
			console.log('🚀 ~ word:', word);
			console.log('🚀 ~ event:', event);
			const element = event.target;
			const text = select(element);
			textRef.current = text;
			if (!!textRef && textRef.current) {
				textRef.current.on('click', () => {
					if (!!textRef && textRef.current) {
						window.open(
							`https://www.hackterms.com/${word.text}`,
							'_blank'
						);
					}
				});
			}
		};
	}, []);

	const callbacks = {
		getWordTooltip: (word) =>
			`Description of ${word.text}:
            ${word.description}`,
		onWordClick: getCallback('onWordClick'),
		onWordMouseOut: getCallback('onWordMouseOut'),
		onWordMouseOver: getCallback('onWordMouseOver'),
	};

	const options = {
		colors: [
			'#1f77b4',
			'#ff7f0e',
			'#2ca02c',
			'#d62728',
			'#9467bd',
			'#8c564b',
			'#e377c2',
			'#7f7f7f',
			'#bcbd22',
			'#17becf',
		],
		enableOptimizations: false,
		enableTooltip: true,
		deterministic: false,
		fontFamily: 'impact',
		fontSizes: [12, 30],
		fontStyle: 'normal',
		fontWeight: '900',
		padding: 1,
		rotations: 3,
		rotationAngles: [0, 90],
		scale: 'sqrt',
		spiral: 'archimedean',
		transitionDuration: 1000,
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='w-full md:w-2/3 lg:w-1/2 px-4 py-8'>
				<ReactWordcloud
					words={skills}
					minSize={[500, 500]}
					callbacks={callbacks}
					options={options}
					className='w-full h-full'
				/>
			</div>
		</div>
	);
};

export default Skills;
