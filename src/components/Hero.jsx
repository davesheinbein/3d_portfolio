import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AnimatedCanvas } from './canvas';

const Hero = ({ isMobile }) => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#2f80ed]' />
					<div className='w-1 sm:h-96 h-60 blue-gradient' />
				</div>

				<div>
					<h1
						className={`${styles.heroHeadText} text-white`}
					>
						Hi, I'm{' '}
						<span className='text-[#2f80ed]'>
							David Sheinbein
						</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100`}
					>
						As a full-stack developer, I create sleek and
						adaptable user interfaces for web and mobile
						applications, using a diverse range of
						technologies. My solutions are robust, scalable,
						and tailored to meet the needs of businesses and
						users alike.
					</p>
					<p className='mt-2 text-white-100'>
						Schedule a{' '}
						<a
							className='text-[#2f80ed] cursor-pointer hover:underline'
							href='https://calendly.com/davidsheinbeindev'
						>
							Meeting
						</a>
					</p>
				</div>
			</div>

			<AnimatedCanvas
				isMobile={isMobile}
				gltfPath={'./desktop_pc/scene.gltf'}
				cameraPosition={[20, 3, 5]}
				cameraFov={25}
			/>

			<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
				<a href='#about'>
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className='w-3 h-3 rounded-full bg-secondary mb-2'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
