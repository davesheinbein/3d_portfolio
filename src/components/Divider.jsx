import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Divider = ({ isMobile }) => {
	return (
		<section className='relative w-full h-screen mx-auto flex justify-center items-center'>
			<ComputersCanvas
				isMobile={isMobile}
				gltfPath={'./smol/scene.gltf'}
				cameraPosition={[10, 20, 0]}
				cameraFov={15}
				computerPosition={[0, 0, 0]}
				computerRotation={[-0.1, 2.2, 0.1]}
				computerScale={[1, 1, 1]}
			/>
		</section>
	);
};

export default Divider;
