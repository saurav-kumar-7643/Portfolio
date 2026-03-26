import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

// 3D Room Component
function Room() {
  const groupRef = useRef();
  const deskRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }

    if (deskRef.current) {
      deskRef.current.position.y = Math.sin(time * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[-5, 5, 5]} intensity={1} color="#d4a5ff" />

      {/* Floor */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#f0e6ff" />
      </mesh>

      {/* Desk */}
      <group ref={deskRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.1, 1.2]} />
          <meshStandardMaterial color="#cdb4f6" />
        </mesh>

        <mesh position={[0, -0.08, 0.6]}>
          <boxGeometry args={[2.5, 0.15, 0.05]} />
          <meshStandardMaterial color="#b9a5e8" />
        </mesh>

        <mesh position={[-1.15, -0.5, -0.4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color="#9d8fd1" />
        </mesh>

        <mesh position={[1.15, -0.5, -0.4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color="#9d8fd1" />
        </mesh>
      </group>

      {/* Laptop */}
      <group position={[0, 0.15, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.35, 0.02]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        <mesh position={[0, 0.2, -0.1]}>
          <boxGeometry args={[0.6, 0.03, 0.15]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>
      </group>

      {/* Chair */}
      <group position={[-1, -0.3, 0.8]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
          <meshStandardMaterial color="#d1bad7" />
        </mesh>

        <mesh position={[0, 0.35, -0.05]}>
          <boxGeometry args={[0.35, 0.6, 0.1]} />
          <meshStandardMaterial color="#c9a7ce" />
        </mesh>

        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
          <meshStandardMaterial color="#b9a5c9" />
        </mesh>
      </group>

      {/* Shelves */}
      <mesh position={[1.5, 0.8, -0.9]}>
        <boxGeometry args={[0.8, 0.08, 0.3]} />
        <meshStandardMaterial color="#e0d5ff" />
      </mesh>

      <mesh position={[1.5, 0.3, -0.9]}>
        <boxGeometry args={[0.8, 0.08, 0.3]} />
        <meshStandardMaterial color="#e0d5ff" />
      </mesh>

      {/* Books */}
      {[
        { pos: [1.1, 0.85, -0.8], color: '#ff6b9d' },
        { pos: [1.3, 0.85, -0.8], color: '#4ecdc4' },
        { pos: [1.5, 0.85, -0.8], color: '#ffd93d' },
        { pos: [1.7, 0.85, -0.8], color: '#95e1d3' },
      ].map((book, idx) => (
        <mesh key={idx} position={book.pos}>
          <boxGeometry args={[0.12, 0.25, 0.2]} />
          <meshStandardMaterial color={book.color} />
        </mesh>
      ))}

      {/* Plant */}
      <mesh position={[-1.5, -0.2, 1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      <mesh position={[-1.5, 0.25, 1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#6bb376" />
      </mesh>

      {/* Wall Art */}
      <mesh position={[-1.8, 1.2, -0.95]}>
        <boxGeometry args={[0.5, 0.5, 0.02]} />
        <meshStandardMaterial color="#ffe0f7" />
      </mesh>

      {/* Window */}
      <mesh position={[1.8, 0.8, -0.98]}>
        <boxGeometry args={[0.6, 0.8, 0.02]} />
        <meshStandardMaterial color="#e0f2ff" />
      </mesh>

      {/* Lamp */}
      <mesh position={[-0.7, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
        <meshStandardMaterial color="#ffd93d" />
      </mesh>

      <mesh position={[-0.7, -0.05, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
        <meshStandardMaterial color="#b8860b" />
      </mesh>

      <mesh position={[-0.7, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.15, 32]} />
        <meshStandardMaterial color="#ffa500" />
      </mesh>
    </group>
  );
}

// Main Scene
export default function ThreeDScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-softLg bg-gradient-to-b from-blue-100 to-pink-100 dark:from-slate-800 dark:to-purple-900/30">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.15}
          floatingRange={[0.1, 0.2]}
        >
          <Room />
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}