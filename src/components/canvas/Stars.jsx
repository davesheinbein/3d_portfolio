import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Points,
	PointMaterial,
	Preload,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { sphereFallback } from '../../constants';
import * as THREE from 'three';

const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() => {
		const positions = random.inSphere(
			new Float32Array(5000),
			{ radius: 1.2 }
		);
		// Filter out NaN values from positions
		const validPositions = positions.filter(
			(value) => !isNaN(value)
		);
		return validPositions.length ? validPositions : null;
	});

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphereFallback}
				stride={3}
				frustumCulled={true}
				{...props}
			>
				<PointMaterial
					transparent
					color='#f272c8'
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	const rendererRef = useRef(null);

	const handleContextLost = (event) => {
		event.preventDefault();
		const renderer = rendererRef.current;
		renderer.dispose();
		renderer.forceContextLoss();
		renderer.context = null;
		renderer.domElement = null;
		rendererRef.current = null;
		rendererRef.current = new THREE.WebGLRenderer({
			antialias: true,
		});
		rendererRef.current.setSize(
			window.innerWidth,
			window.innerHeight
		);
	};

	return (
		<div className='w-full h-auto absolute inset-0 z-[-1]'>
			<Canvas
				camera={{ position: [0, 0, 1] }}
				onCreated={({ gl }) => {
					rendererRef.current = gl;
					gl.domElement.addEventListener(
						'webglcontextlost',
						handleContextLost,
						false
					);
				}}
			>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
