'use client';
import Image from 'next/image';
import Background from './3d-back';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const [door, logo, ring] = [useRef(), useRef(), useRef()];

  return (
    <main className="relative">
      <motion.div
        initial={{
          backgroundColor: '#041f3d',
        }}
        animate={{
          opacity: [1, 0],
          transition: {
            duration: 1,
            delay: 1,
            ease: 'easeInOut',
          },
        }}
        className=" fixed  z-50 inset-0"
        ref={door}
      >
        <div className="absolute w-full h-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: [6, 150],
              rotate: [0, 200],
              x: '-400%',
              transition: {
                duration: 2,
                delay: 1,
                ease: 'easeInOut',
              },
            }}
            onAnimationComplete={() => {
              door.current.style.display = 'none';
            }}
            className="w-3 h-3 pointer-events-none rounded-full border-[20vw] scale-[6] box-content border-transparent border-l-gray-900 border-b-gray-900"
          />
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: [6, 150],
              rotate: [0, 200],
              x: '400%',
              transition: {
                duration: 2,
                delay: 1,
                ease: 'easeInOut',
              },
            }}
            className="w-3 h-3 pointer-events-none rounded-full border-[20vw] scale-[6] box-content border-transparent border-t-slate-600 border-r-slate-600 "
          />
        </div>
        <Image
          ref={logo}
          src="/profile.png"
          width={150}
          height={150}
          loading="eager" // eager loading makes the image load before the animation
          alt="logo"
          className=" w-36 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 -mb-1"
        />
        <div className="fixed top-1/2 transform left-1/2 !-translate-x-1/2  !-translate-y-1/2">
          <motion.div
            ref={ring}
            animate={{
              rotate: 360,
              opacity: [1, 0.5, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className=" w-28 h-28 rounded-full border-[12px] border-transparent   border-r-teal-600 border-l-violet-900 "
          />
        </div>
      </motion.div>
      <Background />
    </main>
  );
}
