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
import { debounce } from 'lodash';

const WordCloud = () => {
	const svgRef = useRef(null);
	const textRef = useRef(null);

	const getCallback = useCallback((callback) => {
		let tooltip = null;

		return function (word, event) {
			const element = event.target;
			const text = d3.select(element);
			textRef.current = text;

			if (!!textRef && textRef.current) {
				textRef.current
					.classed('active', true)
					.on('mouseleave', () => {
						textRef.current.classed('active', false);
						if (tooltip) tooltip.remove();
					})
					.on('mousemove', () => {
						if (!tooltip) {
							tooltip = d3
								.select('body')
								.append('div')
								.classed('tooltip', true);
						}

						const tooltipNode = tooltip.node();
						const pageX = event.pageX;
						const pageY = event.pageY;
						const tooltipWidth = tooltipNode.offsetWidth;
						const tooltipHeight = tooltipNode.offsetHeight;
						const windowWidth = window.innerWidth;
						const windowHeight = window.innerHeight;
						let left = pageX + 10;
						let top = pageY + 10;

						if (left + tooltipWidth > windowWidth) {
							left = pageX - tooltipWidth - 10;
						}

						if (top + tooltipHeight > windowHeight) {
							top = pageY - tooltipHeight - 10;
						}

						tooltip
							.html(word.description)
							.style('left', `${left}px`)
							.style('top', `${top}px`)
							.style('display', 'block');
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
		// Select the svg node in the DOM
		const svg = d3.select(svgRef.current);

		// Get the width and height of the svg node
		const width = svg.node().getBoundingClientRect().width;
		const height = svg
			.node()
			.getBoundingClientRect().height;

		const layout = cloud()
			.size([width, height]) // set the size of the word cloud
			.words(
				skillsData.map((d) => ({
					text: d.text,
					value: d.value,
					color: d3.schemeCategory10[d.id % 10],
					description: d.description,
				}))
			) // set the words to be displayed
			.padding(5) // set the padding between the words
			.rotate(() => ~~(Math.random() * 2) * 90) // set the rotation of the words
			.fontSize((d) => d.value * 10) // set the font size of the words
			// Create a new group element
			.on('end', (words) => {
				const wordCloud = svg
					.select('g')
					// Position the group at the center of the SVG
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
					.style('fill', (d) => d.color)
					.attr('text-anchor', 'middle')
					.attr(
						'transform',
						(d) =>
							`translate(${d.x},${d.y})rotate(${d.rotate})`
					)
					.text((d) => d.text)
					.on('mouseenter', (event, d) => {
						d3.select(event.target)
							.select('title')
							.remove();
						event.preventDefault();
						getCallback((d) => d.description)(d, event);
					})
					.append('title')
					.text((d) => d.description);
			});
		layout.start();
	}, [getCallback]);

	// Create a function to handle the event
	const handleResize = useCallback(
		// Use the debounce function to make sure the function is only called every 500ms
		debounce(() => {
			// Select the SVG element
			const svg = d3.select(svgRef.current);
			// Get the width and height of the SVG element
			const width = svg
				.node()
				.getBoundingClientRect().width;
			// Get the width and height of the SVG element
			const height = svg
				.node()
				.getBoundingClientRect().height;
			// Define the layout of the word cloud
			const layout = cloud()
				// Define the size of the word cloud
				.size([width, height])
				// Define the words in the word cloud
				.words(
					skillsData.map((d) => ({
						text: d.text,
						value: d.value,
						color: d3.schemeCategory10[d.id % 10],
						description: d.description,
					}))
				)
				// Define the padding around each word
				.padding(5)
				// Define the rotation angle of each word
				.rotate(() => ~~(Math.random() * 2) * 90)
				// Define the font size of each word
				.fontSize((d) => d.value * 10)
				.on('end', (words) => {
					// Select the word cloud group
					const wordCloud = svg
						.select('g')
						// Move the word cloud group to the middle of the SVG element
						.attr(
							'transform',
							`translate(${width / 2},${height / 2})`
						);

					// Select the text elements
					const text = wordCloud
						.selectAll('text')
						// Bind the data to the text elements
						.data(words, (d) => d.text);

					// Remove the text elements that no longer need to be displayed
					text.exit().remove();

					// Add new text elements
					text
						.enter()
						.append('text')
						// Define the font size of each word
						.style('font-size', (d) => `${d.size}px`)
						// Define the font color of each word
						.style('fill', (d) => d.color)
						// Make the text anchor in the middle of each word
						.attr('text-anchor', 'middle')
						// Define the rotation of each word
						.attr(
							'transform',
							(d) =>
								`translate(${d.x},${d.y})rotate(${d.rotate})`
						)
						// Define the text of each word
						.text((d) => d.text)
						// Add a mouseenter event to each word to show the tooltip
						.on('mouseenter', (event, d) => {
							// Select the tooltip element that was created by the tooltip component
							d3.select(event.target)
								.select('title')
								.remove();
							// Prevent the default action of the event
							event.preventDefault();
							// Call the function that was passed to the component
							getCallback((d) => d.description)(d, event);
						})
						// Add a tooltip element to each word
						.append('title')
						// Add a tooltip to each word
						.text((d) => d.description);

					// Update the text elements
					text
						.transition()
						.duration(1000)
						// Define the font size of each word
						.style('font-size', (d) => `${d.size}px`)
						// Define the font color of each word
						.style('fill', (d) => d.color)
						// Make the text anchor in the middle of each word
						.attr('text-anchor', 'middle')
						// Define the rotation of each word
						.attr(
							'transform',
							(d) =>
								`translate(${d.x},${d.y})rotate(${d.rotate})`
						)
						// Define the text of each word
						.text((d) => d.text)
						.select('title')
						// Define the tooltip of each word
						.text((d) => d.description);
				});

			// Start the layout
			layout.start();
		}, 500),
		[]
	);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () =>
			window.removeEventListener('resize', handleResize);
	}, [handleResize]);

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
