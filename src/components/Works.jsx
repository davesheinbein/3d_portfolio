import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}) => {
	return (
		<motion.div
			// variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
			className='shadow-xl-white shadow-inner'
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[650px] flex flex-col justify-between shadow-card'
			>
				<div className='relative w-full h-[230px] shadow-xl-white'>
					<img
						src={image}
						alt='project_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() =>
								window.open(source_code_link, '_blank')
							}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain hover:transform hover:scale-110'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>
						{name}
					</h3>
					<p className='mt-2 text-secondary text-[14px]'>
						{description}
					</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
				{!live_link ? (
					<h4
						className='flex justify-center content-center w-full pt-4'
						onClick={() =>
							window.open(source_code_link, '_blank')
						}
					>
						<span className='animate-bounce pl-2 pr-2 text-xl duration-1000 ease-in-out'>
							🙁
						</span>

						<span className='hover:underline hover:text-red-800'>
							Site offline. Access source code on Github.
						</span>
						<span className='animate-bounce pl-2 pr-2 text-xl duration-1000 ease-in-out'>
							🙁
						</span>
					</h4>
				) : (
					<a
						href={live_link}
						target='_blank'
						rel='live website'
					>
						<h4 className='flex justify-center content-center w-full pt-4 hover:underline hover:text-red-800'>
							Check it out!
						</h4>
					</a>
				)}
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div
			// variants={textVariant()}
			>
				<p className={`${styles.sectionSubText} `}>
					My work
				</p>
				<h2 className={`${styles.sectionHeadText}`}>
					Projects.
				</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					// variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my skills and
					experience through real-world examples of my work.
					Each project is briefly described with links to
					code repositories and live demos in it. It
					reflects my ability to solve complex problems,
					work with different technologies, and manage
					projects effectively.
				</motion.p>
			</div>

			<div className='t-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
