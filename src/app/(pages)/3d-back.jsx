'use client';
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { motion, useAnimate } from 'framer-motion';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Ship } from '@/models';
import { useRouter } from 'next/navigation';

const MainPlane = () => {
  let [planeRef, pointsRef] = [useRef(), useRef()];

  useEffect(() => {
    const colors = [];
    // color has to be devided by 255
    const initColor = {
      x: 27 / 255,
      y: 255 / 255,
      z: 244 / 255,
    };
    const { array } = planeRef.current.geometry.attributes.position;
    const randomPos = []; // For individual movement of vertives
    for (let i = 0; i < array.length; i += 3) {
      array[i] += (Math.random() - 0.5) * 0.2;
      array[i + 1] += (Math.random() - 0.5) * 0.2;
      array[i + 2] += (Math.random() - 0.5) * 2.5;
      randomPos.push(Math.random() * Math.PI * 2);
      randomPos.push(Math.random() * Math.PI * 2);
      randomPos.push(array[i + 2]);
      colors.push(initColor.x, initColor.y, initColor.z);
    }

    planeRef.current.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); // Color attribute has to be in the form of Float32BufferArray
    planeRef.current.geometry.attributes.position.originalPos = array;
    planeRef.current.geometry.attributes.position.randomPos = randomPos;

    // animate
    let clock = new THREE.Clock();
    let time = 0;
    const animate = () => {
      if (!planeRef.current) return;
      requestAnimationFrame(animate);
      time = clock.getElapsedTime();
      const { array, originalPos } = planeRef.current.geometry.attributes.position;
      for (let i = 0; i < array.length; i += 3) {
        array[i] = originalPos[i] + Math.cos(time + randomPos[i]) * 0.002;
        array[i + 1] = originalPos[i + 1] + Math.sin(time + randomPos[i + 1]) * 0.002;
      }
      planeRef.current.geometry.attributes.position.needsUpdate = true;
    };
    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  const starPositions = Array(90000)
    .fill()
    .map(() => (Math.random() - 0.5) * 1900 + 50);

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starPositions.length / 3}
            array={new Float32Array(starPositions)}
            itemSize={3}
          />
          <pointsMaterial attach="material" color={0xffffff} />
        </bufferGeometry>
      </points>
      <mesh ref={planeRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry attach="geometry" args={[150, 150, 40, 40]} />
        <meshMatcapMaterial flatShading side={THREE.DoubleSide} vertexColors />
      </mesh>
    </>
  );
};

const Camera = () => {
  let shipRef = useRef();
  let { camera } = useThree();
  let router = useRouter();

  gsap.to(camera.position, {
    x: 0,
    y: 0,
    z: 30,
    duration: 10,
  });

  useEffect(() => {
    const handleClick = () => {
      // push to home page after 4.2s
      setTimeout(() => {
        router.push('/home');
      }, 4200);
      gsap.to(shipRef.current.position, {
        x: 0,
        y: 12,
        z: 5,
        duration: 2,
        ease: 'power2.inOut',
        delay: 1.3,
      });
      gsap.to(shipRef.current.position, {
        x: 0,
        y: 1100,
        z: 0,
        duration: 2,
        ease: 'power4.inOut',
        delay: 3,
      });

      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 10,
        duration: 2,
        delay: 1.5,
        ease: 'power2.inOut',
      });
      gsap.to(camera.rotation, {
        x: 1.57,
        y: 0,
        z: 0,
        duration: 2,
        delay: 1.5,
        ease: 'power2.inOut',
      });
      gsap.to(camera.position, {
        x: 0,
        y: 1000,
        z: 0,
        duration: 2,
        delay: 3,
        ease: 'power4.inOut',
      });
    };

    let CanvasBtn = document.getElementById('CanvasButton');

    CanvasBtn.addEventListener('click', handleClick);
    return () => {
      CanvasBtn.removeEventListener('click', handleClick);
    };
  }, []);

  // camera.position.set(x, y, z);
  camera.updateProjectionMatrix();
  return <Ship ref={shipRef} position={[0, -5, 10]} rotation={[1.57, 3.14, 0]} />;
};

function AnimationCanvas() {
  return (
    <Canvas className="!fixed !w-screen !h-screen inset-0 z-30">
      <ambientLight intensity={1.5} />
      <Camera />
      <pointLight position={[0, -8, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 8, -10]} intensity={0.8} color={0xffffff} />
      <MainPlane />
    </Canvas>
  );
}

export default function Backgroundk() {
  const [cardref, animateCard] = useAnimate();

  const handleClick = () => {
    animateCard(cardref.current, {
      opacity: [1, 0, 0],
      scale: [1, 0.9, 0],
      transition: {
        duration: 2,
      },
    });
  };

  return (
    <section
      style={{
        // space gradient background
        background: 'fixed radial-gradient(#041f3d, #07070c)',
      }}
      className="relative text-snow text-center flex items-center justify-center h-screen "
    >
      <motion.div
        ref={cardref}
        animate={{
          opacity: [0, 1],
          scale: [0.9, 1],
          y: [20, 0],
          transition: {
            duration: 0.5,
            delay: 1.5,
          },
        }}
        className=" cursor-default z-40 flex flex-col gap-2 items-center"
      >
        <div className=" pointer-events-none text-gray-700">
          <h3 className="text-lg md:text-xl lg:text-2xl leading-4 mt-2 font-semibold ">
            ABDELRHMAN SAMY SAAD
          </h3>
          <div className="text flex flex-col">
            <p className=" max-w-lg md:max-w-xl lg:max-w-2xl px-2 text-3xl md:text-4xl lg:text-5xl text-gray-800 uppercase">
              If you hear a voice within you say you cannot paint, then by all means paint, and that
              voice will be silenced.
            </p>
            <span className="  text-sm md:text-base lg:text-lg">- Vincent Van Gogh</span>
            <p className="text-lg md:text-xl lg:text-2xl leading-4 mt-4">
              Glad you're here - Enjoy this sneak peek into the world we've created!
            </p>
          </div>
        </div>
        <button
          onClick={handleClick}
          id="CanvasButton"
          type="button"
          className="border border-gray-700 text-lg md:text-xl lg:text-2xl mt-2 py-2 px-4 md:py-3 md:px-6 uppercase rounded-lg"
        >
          Launch
        </button>
      </motion.div>
      <Suspense fallback={<div>loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </section>
  );
}
