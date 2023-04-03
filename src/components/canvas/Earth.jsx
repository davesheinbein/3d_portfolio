import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Preload,
	Text,
	useGLTF,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
	const earth = useGLTF('./planet/scene.gltf');

	return (
		<primitive
			object={earth.scene}
			scale={2.5}
			position-y={0}
			rotation-y={0}
		/>
	);
};

const Banner = ({ text, pos, rotation }) => {
	let isText = !!text ? text : 'Contact';
	let isPos = !!pos ? pos : null;
	let isRotation = !!rotation ? rotation : [0, 0, 0];
	return (
		<Text
			position={isPos}
			fillOpacity={0.9}
			fontSize={0.6}
			color='#804dee'
			maxWidth={200}
			lineHeight={1}
			align='center'
			anchorX='center'
			anchorY='middle'
			depthWrite={true}
			rotation={isRotation}
			castShadow={true}
			bevelEnabled={true}
			bevelSize={0.05}
			bevelThickness={0.05}
			extrudeEnabled={true}
			extrudeMaterial={'phong'}
			depth={0.1}
		>
			{isText}
		</Text>
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop='demand'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Banner
					text={'The World is Yours'}
					pos={[0, 0, 2.4]}
				/>
				<Earth />
				<Banner
					text={'Planet Programming'}
					pos={[0, 0, -2.4]}
					rotation={[0, Math.PI, 0]}
				/>

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
