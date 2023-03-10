import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
	useGLTF,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const SPHERE_GTLF_PATH =
	'/sphere-mirror-4k-materialtest/scene.gltf';

const Ball = ({ imgUrl, delay }) => {
	const [decal] = useTexture([imgUrl]);

	const { nodes } = useGLTF(SPHERE_GTLF_PATH);

	const material =
		nodes.sanjiaodisikeqiu.children[0].material;

	// State variable to keep track of rotation angle
	const [rotationAngle, setRotationAngle] = useState(0);

	// Update rotation angle on every frame
	useFrame(({ clock }) => {
		setRotationAngle(
			Math.sin(clock.getElapsedTime() * 0.5 + delay) *
				Math.PI *
				0.5
		);
	});

	return (
		<Float
			speed={8}
			rotationIntensity={2.5}
			floatIntensity={2}
			rotation={[0, rotationAngle, 0]} // Set rotation angle on y-axis
		>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 0.15]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#56ccf2'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
					metalness={material.metalness}
					roughness={material.roughness}
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon: imgUrl, index, name }) => {
	return (
		<Canvas
			frameloop='demand'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			title={name}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball
					key={index}
					imgUrl={imgUrl}
					name={name}
					delay={index * 0.1}
				/>
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
