import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { fadeIn } from '../utils/motion';

const Divider = ({ isMobile }) => {
	return (
		<motion.div
			variants={fadeIn('left', 'spring', 1, 0.75)}
			className='relative w-full h-screen mx-auto flex flex-center'
		>
			<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center select-none pointer-events-none'>
				<h1 className='text-white z-10 text-9xl font-bold tracking-wide shadow-lg font-mono'>
					Hello World!
				</h1>
			</div>
			<ComputersCanvas
				isMobile={isMobile}
				gltfPath={'./smol/scene.gltf'}
				cameraPosition={[15, 20, 0]}
				cameraFov={10}
				computerPosition={[0, -0.75, 0]}
				computerRotation={[-0.1, 2.2, 0.1]}
				computerScale={[1, 1, 1]}
			/>
		</motion.div>
	);
};

export default Divider;
