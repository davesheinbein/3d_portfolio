import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AnimatedCanvas } from './canvas';
import { fadeIn } from '../utils/motion';

const Divider = ({ isMobile }) => {
	return (
		<motion.div
			className='relative w-full h-screen mx-auto flex flex-center'
			variants={fadeIn('left', 'spring', 1, 0.75)}
		>
			<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center select-none pointer-events-none'>
				<h1 className='text-white z-10 text-9xl font-bold tracking-wide shadow-lg font-mono'>
					Hello World!
				</h1>
			</div>
			<motion.div
				className='relative w-full h-full mx-auto flex flex-center'
				variants={fadeIn('right', 'spring', 1, 0.75)}
			>
				<AnimatedCanvas
					isMobile={isMobile}
					gltfPath={'./smol/scene.gltf'}
					cameraPosition={[15, 20, 0]}
					cameraFov={10}
					gltfObjectPosition={[0, -0.75, 0]}
					gltfObjectRotation={[-0.1, 2.2, 0.1]}
					gltfObjectScale={[1, 1, 1]}
					autoRotate={true}
				/>
			</motion.div>
		</motion.div>
	);
};

export default Divider;
