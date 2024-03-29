import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#2f80ed',
				color: '#fff',
			}}
			contentArrowStyle={{
				borderRight: '7px solid  #232631',
			}}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full overflow-hidden rounded-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[100%] h-[100%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<a
					className='text-white text-[24px] font-bold cursor-pointer hover:underline'
					href={experience.linkedinUrl}
				>
					<h3 className='text-white text-[24px] font-bold'>
						{experience.title}
					</h3>
				</a>
				<p
					className='text-secondary text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div className='text-center blah'>
				<p
					className={`${styles.sectionSubText} text-center blah`}
				>
					Where I have worked so far...
				</p>
				<h2
					className={`${styles.sectionHeadText} text-center blah`}
				>
					~ Work Experience ~
				</h2>
			</motion.div>

			<div className='mt-20 flex flex-col justify-center items-center'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
