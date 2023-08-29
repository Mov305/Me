'use client';
import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import { useGLTF, QuadraticBezierLine } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Spaceman = forwardRef(({ children, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/models/space_man.glb');
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      {...props}
      geometry={nodes.Astronaut_mesh.geometry}
      material={materials.Astronaut_mat}
      material-envMapIntensity={0}
      dispose={null}
    >
      {children}
    </mesh>
  );
});

export const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/space_ship.gltf');
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
        material-color="#e9ecef"
      />
      <mesh
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color="#f8f9fa"
      />
      <mesh receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
      <mesh receiveShadow geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh receiveShadow geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  );
});

export const Island = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/island2.glb');
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={nodes.Scene} />
    </group>
  );
});

export function Cable({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(
    () =>
      ref.current.setPoints(start.current.getWorldPosition(v1), end.current.getWorldPosition(v2)),
    [],
  );
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />;
}
