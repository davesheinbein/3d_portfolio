import React, {
	Suspense,
	useEffect,
	useState,
} from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Preload,
	useGLTF,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({
	gltfPath,
	position,
	rotation,
	scale,
}) => {
	const computer = useGLTF(gltfPath);

	return (
		<mesh>
			<hemisphereLight
				intensity={0.15}
				groundColor='black'
			/>
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={scale}
				position={position}
				rotation={rotation}
			/>
		</mesh>
	);
};

const ComputersCanvas = ({
	gltfPath = './desktop_pc/scene.gltf',
	cameraPosition = [20, 3, 5],
	cameraFov = 25,
	isMobile = false,
	computerPosition = isMobile
		? [0, -3, -2.2]
		: [0, -3.25, -1.5],
	computerRotation = [-0.01, -0.2, -0.1],
	computerScale = isMobile ? 0.7 : 0.75,
}) => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: cameraPosition, fov: cameraFov }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full h-full cursor-ew-resize'
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers
					gltfPath={gltfPath}
					position={computerPosition}
					rotation={computerRotation}
					scale={computerScale}
				/>
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
