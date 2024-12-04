import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, MathUtils } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation
    meshRef.current.rotation.x = MathUtils.lerp(
      meshRef.current.rotation.x,
      state.clock.getElapsedTime() * 0.3,
      0.1
    );
    meshRef.current.rotation.y = MathUtils.lerp(
      meshRef.current.rotation.y,
      state.clock.getElapsedTime() * 0.4,
      0.1
    );

    // Floating animation
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <torusKnotGeometry args={[1.5, 0.5, 256, 64]} />
      <meshPhysicalMaterial
        color="#2EF2FF"
        metalness={0.9}
        roughness={0.1}
        emissive="#2EF2FF"
        emissiveIntensity={0.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

export default AnimatedSphere;