import React, {
	Suspense,
	useRef,
	useState,
	useLayoutEffect,
} from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	OrbitControls,
	Preload,
	useGLTF,
	useAnimations,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Animated = ({
	gltfPath,
	position,
	rotation,
	scale,
}) => {
	const animatedRef = useRef();
	const gltfObject = useGLTF(gltfPath);
	const { animations } = useGLTF(gltfPath);
	const { actions } = useAnimations(
		animations,
		animatedRef
	);
	// const [rotationAngle, setRotationAngle] = useState(0);

	useFrame((state, delta) => {
		if (animatedRef.current) {
			if (!!actions.Animation) {
				actions.Animation.play();
				actions.Animation.setLoop(THREE.LoopRepeat);
			}
		}
	});

	useLayoutEffect(() => {
		if (!!actions.Animation) {
			actions.Animation.play();
			actions.Animation.setLoop(THREE.LoopRepeat);
		}
	}, [actions.Animation]);

	return (
		<group ref={animatedRef}>
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
					object={gltfObject.scene}
					scale={scale}
					position={position}
					rotation={rotation}
				/>
			</mesh>
		</group>
	);
};

const AnimatedCanvas = ({
	gltfPath = './desktop_pc/scene.gltf',
	cameraPosition = [20, 3, 5],
	cameraFov = 25,
	isMobile = false,
	gltfObjectPosition = isMobile
		? [0, -3, -2.2]
		: [0, -3.25, -1.5],
	gltfObjectRotation = [-0.01, -0.2, -0.1],
	gltfObjectScale = isMobile ? 0.7 : 0.75,
	autoRotate = false,
}) => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: cameraPosition, fov: cameraFov }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full h-full cursor-ew-resize'
			onPlay={() => {
				console.log('play');
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					autoRotate={autoRotate}
				/>
				<Animated
					gltfPath={gltfPath}
					position={gltfObjectPosition}
					rotation={gltfObjectRotation}
					scale={gltfObjectScale}
					autoRotate={autoRotate}
				/>
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default AnimatedCanvas;
