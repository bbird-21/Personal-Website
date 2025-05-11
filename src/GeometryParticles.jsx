import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import vertexShader from './vertexShader.glsl?raw';
import fragmentShader from './fragmentShader.glsl?raw';


const GeometryParticles = (props) => {
  const { count } = props;
  const radius = 0.1;

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
	const positions = new Float32Array(count * 3);

	for (let i = 0; i < count; i++) {
	  const distance = Math.sqrt(Math.random()) * radius;
	  const theta = THREE.MathUtils.randFloatSpread(360);
	  const phi = THREE.MathUtils.randFloatSpread(360);

	  let x = distance * Math.sin(theta) * Math.cos(phi)
	  let y = distance * Math.sin(theta) * Math.sin(phi);
	  let z = distance * Math.cos(theta);

	  positions.set([x, y, z], i * 3);
	}

	return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
	uTime: {
	  value: 0.0
	},
	uRadius: {
	  value: radius
	}
  }), [])


  useFrame((state) => {
	const { clock } = state;
	const elapsedTime = clock.getElapsedTime();

	if (points.current) {
	  // --- Logarithmic Scaling ---

	  // Parameters to control the curve:
	  const initialScale = 0.0;
	  const growthFactor = 21.0;
	  // Time scaling factor (values > 1 make it slow down faster, < 1 slower)
	  const timeScale = 1.0;
	  const maxScale = 100;
	  let   calculatedScale = initialScale + growthFactor * Math.log(timeScale * elapsedTime + 1);
	  const currentScale = Math.min(calculatedScale, maxScale);
	  // Apply the scale
	  points.current.scale.set(currentScale, currentScale, currentScale);
	  // --- Update Uniforms ---
	  points.current.material.uniforms.uTime.value = elapsedTime;
	  points.current.material.uniforms.uRadius.value = 0.1 * currentScale;
	}
  });

  return (
	<points ref={points}>
	  <bufferGeometry>
		<bufferAttribute
		  attach="attributes-position"
		  count={particlesPosition.length / 3}
		  array={particlesPosition}
		  itemSize={3}
		/>
	  </bufferGeometry>
	  <shaderMaterial
		blending={THREE.AdditiveBlending}
		depthWrite={false}
		fragmentShader={fragmentShader}
		vertexShader={vertexShader}
		uniforms={uniforms}
	  />
	</points>
  );
};

export default GeometryParticles;
