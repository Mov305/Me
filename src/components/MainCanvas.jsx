'use client';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  PivotControls,
  ContactShadows,
  OrbitControls,
} from '@react-three/drei';
import { Island, Spaceman, Ship, Cable } from '@/models/index.jsx';
import { useControls } from 'leva';

export default function MainCanvas() {
  const ship = useRef();
  const spaceman = useRef();

  return (
    <Canvas shadows camera={{ position: [0, 1.5, 3] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[-10, 0, -5]} intensity={2} color="#9c55a3" />
      <directionalLight position={[-1, -2, -5]} intensity={0.8} color="white" />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />

      <group position={[3.6, 1.3, -2.7]} rotation={[0.1, -0.8, -0.1]} scale={0.5}>
        <Float scale={0.7} position={[2.5, 0.3, 9]} rotation={[0.2, 0, 0.3]}>
          <PivotControls scale={0.2} lineWidth={0.5}>
            <Ship ref={ship} />
          </PivotControls>
        </Float>
        <Float
          position={[1, 1.1, -0.5]}
          rotation={[Math.PI / 3.5, 0, 0]}
          rotationIntensity={2}
          floatIntensity={3}
          speed={1.5}
        >
          <Spaceman scale={0.2}>
            <object3D position={[-0.6, 2, 0]} ref={spaceman} />
          </Spaceman>
        </Float>
      </group>
      <Cable start={ship} end={spaceman} />

      <Float
        position={[5, -1.7, -5]}
        rotation={[0, -1.75, 0]}
        scale={1.3}
        speed={0.5}
        floatIntensity={0.5}
        floatingRange={[0, 0.7]}
        rotationIntensity={0.7}
      >
        <Island />
      </Float>

      {/* back drop to only be on the floor */}
      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="night" />
    </Canvas>
  );
}
