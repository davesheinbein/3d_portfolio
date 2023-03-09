import React, {
	Suspense,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { skillsData } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import CanvasLoader from './Loader';

const WordCloud = () => {
	const svgRef = useRef(null);
	const textRef = useRef(null);

	const getCallback = useCallback((callback) => {
		return function (word, event) {
			const element = event.target;
			const text = d3.select(element);
			textRef.current = text;
			if (!!textRef && textRef.current) {
				textRef.current
					.classed('active', true)
					.on('mouseleave', () => {
						textRef.current.classed('active', false);
					})
					.on('click', () => {
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

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		const width = svg.node().getBoundingClientRect().width;
		const height = svg
			.node()
			.getBoundingClientRect().height;

		const layout = cloud()
			.size([width, height])
			.words(
				skillsData.map((d) => ({
					text: d.text,
					value: d.value,
					color: d3.schemeCategory10[d.id % 10], // add color to the word
					description: d.description, // add description to the word
				}))
			)
			.padding(5)
			.rotate(() => ~~(Math.random() * 2) * 90)
			.fontSize((d) => d.value * 10)
			.on('end', (words) => {
				const wordCloud = svg
					.select('g')
					.attr(
						'transform',
						`translate(${width / 2},${height / 2})`
					);

				wordCloud
					.selectAll('text')
					.data(words)
					.enter()
					.append('text')
					.style('font-size', (d) => `${d.size}px`)
					.style('fill', (d) => d.color) // set the color of the word
					.attr('text-anchor', 'middle')
					.attr(
						'transform',
						(d) =>
							`translate(${d.x},${d.y})rotate(${d.rotate})`
					)
					.text((d) => d.text)
					.on(
						'mouseenter',
						getCallback((d) => d.description)
					)
					.append('title') // add a title element to show the description on hover
					.text((d) => d.description);
			});

		layout.start();
	}, [getCallback]);

	return (
		<Suspense fallback={<CanvasLoader />}>
			<motion.div variants={textVariant()}>
				<svg ref={svgRef} className='w-full sm:h-96 h-60'>
					<g />
				</svg>
			</motion.div>
		</Suspense>
	);
};

export default WordCloud;
