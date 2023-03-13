// Import the required modules
import React, {
	Suspense,
	useEffect,
	useRef,
	useCallback,
	useState,
} from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { skillsData } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import CanvasLoader from './Loader';
import { debounce } from 'lodash';
import { SectionWrapper } from '../hoc';

// Define a React component for the WordCloud
const WordCloud = () => {
	// add skillsData to state
	const [data, setData] = useState(skillsData);
	// console.log('🚀 ~ data:', data);
	// Create a reference to the SVG and text elements
	const svgRef = useRef(null);
	const textRef = useRef(null);

	// This function returns a memoized callback function that is used to create a tooltip when hovering over text.
	const getCallback = useCallback(() => {
		// Initialize tooltip to null
		let tooltip = null;

		// Return a function that takes in a word and event as arguments
		return function (word, event) {
			// console.log('🚀 ~ word:', word);
			// console.log('🚀 ~ event:', event);
			// Get the element that triggered the event
			const element = event.target;
			// Select the text element with D3
			const text = d3.select(element);
			// Set the current text reference to the selected text element
			textRef.current = text;

			// Check if textRef exists and is defined
			if (!!textRef && textRef.current) {
				// Add event listeners to the text element
				textRef.current
					.classed('active', true)
					// Remove the active class and the tooltip if it exists when the mouse leaves the text element
					.on('mouseleave', () => {
						textRef.current.classed('active', false);
						if (tooltip) tooltip.remove();
					})
					.on('mousemove', () => {
						// Check if tooltip exists and is defined
						if (!tooltip) {
							// If not, create a new tooltip element with D3 and append it to the body
							tooltip = d3
								.select('body')
								.append('div')
								.classed('tooltip', true);
						}

						// Get the tooltip node and mouse coordinates
						const tooltipNode = tooltip.node();
						const pageX = event.pageX;
						const pageY = event.pageY;

						// Get the dimensions of the tooltip and the window
						const tooltipWidth = tooltipNode.offsetWidth;
						const tooltipHeight = tooltipNode.offsetHeight;
						const windowWidth = window.innerWidth;
						const windowHeight = window.innerHeight;

						// Calculate the left and top positions of the tooltip
						let left = pageX + 10;
						let top = pageY + 10;

						// Move tooltip to the left if it goes out of the window
						if (left + tooltipWidth > windowWidth) {
							left = pageX - tooltipWidth - 10;
						}

						if (top + tooltipHeight > windowHeight) {
							// Move tooltip above the mouse if it goes out of the window
							top = pageY - tooltipHeight - 10;
						}

						// Set the HTML content of the tooltip and its position
						tooltip
							.html(
								`<div class='tooltip__container'>
									<h4 class='tooltip__container-title'>${word.text}</h4>
									<br/>
									<span class='tooltip__container-subtitle'>Description:</span>
									<br/>
									<span class='tooltip__container-text'>${word.description}</span>
								</div>`
							)
							.style('left', `${left}px`)
							.style('top', `${top}px`)
							.style('display', 'block');
					})
					.on('click', () => {
						// Open a new window with the hackterms.com URL and the selected word as a parameter
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

	const fontSizeScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => d.value)])
		.range([10, 100]);

	useEffect(() => {
		// Select the svg node in the DOM
		const svg = d3.select(svgRef.current);

		// Get the width and height of the svg node
		const width = svg.node().getBoundingClientRect().width;
		const height = svg
			.node()
			.getBoundingClientRect().height;

		// Define a word cloud layout using the D3 cloud() function, and set its size to the given width and height.
		const layout = cloud()
			.size([width, height])
			// Use the data in skillsData to generate an array of objects, each containing a word and its associated value, color and description.
			.words(
				data.map((d) => ({
					text: d.text,
					value: d.value,
					color: d3.schemeCategory10[d.id % 10],
					description: d.description,
				}))
			)
			// Set the padding between words in the cloud.
			.padding(10)
			// Randomly rotate each word in the cloud by 0 or 90 degrees.
			.rotate(() => ~~(Math.random() * 2) * 90)
			// Use the fontSizeScale to set the font size for each word based on its value.
			.fontSize((d) => fontSizeScale(d.value))
			// Once the layout is computed, append the words to the SVG.
			.on('end', (data) => {
				// Select the SVG group where the words will be added.
				const wordCloud = svg
					.select('g')
					.attr(
						'transform',
						`translate(${width / 2},${height / 2})`
					);

				// Bind the word data to text elements, and set their font size, color, text shadow, anchor, and rotation.
				wordCloud
					// Select all 'text' elements in the wordCloud
					.selectAll('text')
					// Bind the 'words' data to the 'text' elements
					.data(data)
					// Enter new 'text' elements for any new data points
					.enter()
					.append('text')
					// Set the font size for each word based on its size property.
					.style('font-size', (d) => `${d.size}px`)
					// Set the fill color for each word based on its color property
					.style('fill', (d) => d.color)
					// Add a text shadow effect to the words for better visibility
					.style(
						'text-shadow',
						'2px 2px 2px rgba(255,255,255,0.5)'
					)
					// Set the text anchor to the middle of the word
					.attr('text-anchor', 'middle')
					// Apply a transformation to each word to position it on the screen.
					.attr(
						'transform',
						(d) =>
							`translate(${d.x},${d.y})rotate(${d.rotate})`
					)
					// Set the text content of each word to its text property
					.text((d) => d.text)
					// On mouseenter, display the word's description as a tooltip.
					.on('mouseenter', (event, d) => {
						d3.select(event.target)
							.select('title')
							.remove();
						event.preventDefault();
						// Call the getCallback function with the word's description and event as arguments.
						getCallback((d) => {
							// console.log('d', d);
							// console.log('d.description', d.description);
							return d.description;
						})(d, event);
					})
					// Add a title element to each word with its description.
					.append('title')
					.text((d) => d.description);
			});
		// Start the layout computation.
		layout.start();
		// Add the getCallback function to the dependency array, so that it is called whenever it changes.
	}, [getCallback]);

	// Create a function to handle the event
	const handleResize = useCallback(
		// Use the debounce function to make sure the function is only called every 500ms
		debounce(() => {
			// Select the SVG element
			const svg = d3.select(svgRef.current);
			// Get the width and height of the SVG element
			const padding = 5;
			const width =
				svg.node().getBoundingClientRect().width - padding;
			// Get the width and height of the SVG element
			const height =
				svg.node().getBoundingClientRect().height - padding;
			// Define the layout of the word cloud
			const layout = cloud()
				// Define the size of the word cloud
				.size([width, height])
				// Define the words in the word cloud
				.words(
					data.map((d) => ({
						text: d.text,
						value: d.value,
						color: d3.schemeCategory10[d.id % 10],
						description: d.description,
					}))
				)
				// Define the padding around each word
				.padding(10)
				// Define the rotation angle of each word
				.rotate(() => ~~(Math.random() * 2) * 90)
				// Define the font size of each word
				.fontSize((d) => fontSizeScale(d.value))
				.on('end', (data) => {
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
						.data(data, (d) => d.text);

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
							getCallback((d) => {
								// console.log('d', d);
								// console.log('d.description', d.description);
								return d.description;
							})(d, event);
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
		// Add event listener to window object to handle resize events.
		window.addEventListener('resize', handleResize);

		return () =>
			// remove event listener to window object to handle resize events.
			window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return (
		<motion.div
			variants={fadeIn('left', 'spring', 1, 0.75)}
		>
			<Suspense fallback={<CanvasLoader />}>
				<motion.div variants={textVariant()}>
					<svg
						ref={svgRef}
						className='w-full sm:h-96 h-60 select-none'
					>
						<g />
					</svg>
				</motion.div>
			</Suspense>
		</motion.div>
	);
};

export default SectionWrapper(WordCloud, 'Cloud');
