import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn(
					'right',
					'spring',
					index * 0.5,
					0.75
				)}
				className='w-full orange-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img
						src={icon}
						alt='web-development'
						className='w-16 h-16 object-contain'
					/>

					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					Introduction
				</p>
				<h2 className={styles.sectionHeadText}>
					Overview.
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px'
			>
				I am a highly motivated software engineer with over
				5 years of experience in developing and delivering
				scalable, high-performance applications. I am
				proficient in a wide range of programming languages
				and technologies, including React, Node.js, and
				Python. I have a strong understanding of software
				development methodologies, including Agile and
				Waterfall, and have experience working in both small
				and large teams.
				<br />
				<br />
				My passion for technology and my drive to
				continuously improve my skills have enabled me to
				quickly adapt to new technologies and software
				development processes. I have a proven track record
				of delivering high-quality software solutions on
				time and within budget, and I am committed to
				delivering the best possible user experience.
				<br />
				<br />
				When I am not coding, I enjoy exploring new
				technologies, reading about software development,
				and playing video games. I am also an avid traveler
				and enjoy experiencing different cultures and
				cuisines.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10 justify-center'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
