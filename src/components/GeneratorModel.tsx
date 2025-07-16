import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Import the GLB model directly
const modelPath = '/base_basic_pbr.glb';

// Create a separate component that uses the useGLTF hook
function ModelGLB() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  const { camera } = useThree();
  
  // Add auto-rotation
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2; // Slow rotation
    }
  });

  // Center the model
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      
      scene.position.x = -center.x;
      scene.position.y = -center.y;
      scene.position.z = -center.z;
      
      // Set initial camera position
      if (camera instanceof THREE.PerspectiveCamera) {
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.z = maxDim * 2;
        camera.lookAt(0, 0, 0);
      }
    }
  }, [scene, camera]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}


// Main model component with error boundary and loading state
function Model() {
  const [error, setError] = useState<Error | null>(null);
  
  // Error boundary for the GLB component
  if (error) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    );
  }
  
  return (
    <ErrorBoundary fallback={<div>Error loading model</div>} onError={setError}>
      <Suspense fallback={
        <group>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#cccccc" />
          </mesh>
        </group>
      }>
        <ModelGLB />
      </Suspense>
    </ErrorBoundary>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError: (error: Error) => void;
}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }
  
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// Preload the model
useGLTF.preload(modelPath);

// Main component
export default function GeneratorModel() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl overflow-hidden shadow-lg border border-secondary/20">
      <Canvas 
        camera={{ position: [2, 2, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // For better quality on retina displays
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px'
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for overall illumination */}
          <ambientLight intensity={0.5} />
          
          {/* Main directional light */}
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* Fill light to reduce harsh shadows */}
          <hemisphereLight 
            color="#ffffff" 
            groundColor="#b4b4b4" 
            intensity={0.5} 
          />
          
          {/* Back light */}
          <pointLight position={[-10, 10, -5]} intensity={0.3} />
          
          {/* The 3D model */}
          <Model />
          
          {/* Orbit controls with constraints */}
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// No need to preload with our simple model
