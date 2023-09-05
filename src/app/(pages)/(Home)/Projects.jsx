'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Macbook } from '@/models/index.jsx';
import { projects } from '@/utils/data';
import { motion } from 'framer-motion';
import { FcPrevious, FcNext } from 'react-icons/fc';
import Link from 'next/link';
import Image from 'next/image';

export function LapCanv({ proj }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={1.5}>
        <orthographicCamera
          attachObject={['shadow', 'camera']}
          args={[-10, 10, 10, -10, 0.5, 30]}
        />
      </directionalLight>

      <Float scale={2.2} rotation={[0.3, 0, 0]} rotationIntensity={0.1}>
        <Macbook proj={proj} />
      </Float>
    </>
  );
}

export default function Projects() {
  const [proj, setProj] = useState(projects[0]);
  const [projIndex, setProjIndex] = useState(0);

  const handleNext = () => {
    if (projIndex === projects.length - 1) {
      setProjIndex(0);
      setProj(projects[0]);
    } else {
      setProjIndex(projIndex + 1);
      setProj(projects[projIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (projIndex === 0) {
      setProjIndex(projects.length - 1);
      setProj(projects[projects.length - 1]);
    } else {
      setProjIndex(projIndex - 1);
      setProj(projects[projIndex - 1]);
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        delay: 0,
        duration: 0.5,
      },
    },
  };

  const teckmap = {
    html: '/techsvgs/html.svg',
    css: '/techsvgs/css.svg',
    javascript: '/techsvgs/javascript.svg',
    nextjs: '/techsvgs/nextjs.svg',
    reactjs: '/techsvgs/react.svg',
    tailwindcss: '/techsvgs/tailwindcss.svg',
    redux: '/techsvgs/redux.svg',
    localstorage: '/techsvgs/cloud-storage.svg',
    'react-native': '/techsvgs/react-native.svg',
    mongoDB: '/techsvgs/mongodb.svg',
    webpack: '/techsvgs/webpack.svg',
    framer: '/techsvgs/framer.svg',
    github: '/techsvgs/github.svg',
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-5 relative rounded-lg backdrop-blur-sm p-5 ">
      <div className=" md:col-span-5 flex items-center w-full bg-gradient-to-br from-violet-500/20 via-transparent to-transparent shadow-sm rounded-xl p-3 sm:p-5">
        <h1 className=" gradient_text text-2xl sm:text-4xl font-thin uppercase">
          FEATURED PROJECTS
        </h1>
      </div>
      <h2 className=" md:hidden mt-5 text-2xl sm:text-4xl font-bold uppercase text-center gradient_title">
        {proj.title}
      </h2>

      <motion.div
        key={proj}
        variants={variants}
        initial="hidden"
        animate="visible"
        className=" -mt-14 md:mt-0 md:col-span-3 flex justify-center items-center"
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, -3.2, 40], fov: 12 }}
          className=" !h-[60vh] scale-75 md:scale-100   w-full  min-w-[560px]"
        >
          <LapCanv proj={proj.img} />
        </Canvas>
      </motion.div>
      <motion.div
        key={proj.title}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="md:col-span-2 -mt-14 md:mt-0 "
      >
        <div className="flex flex-col h-full md:w-[150%] min-h-[400px]  rounded-lg -translate-y-40 md:translate-y-0 md:-translate-x-60 mt-10">
          <h2 className=" hidden md:block text-2xl sm:text-4xl font-bold uppercase text-center gradient_title">
            {proj.title}
          </h2>
          <p className="text-sm sm:text-base font-thin text-center mt-5 p-1 md:px-10 bg-slate-700/60 rounded-lg ">
            {proj.description}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold uppercase text-center mt-5">Tech Stack</h3>
          <div className="flex items-center justify-center  mt-5">
            {proj?.tech.map((t) => {
              return (
                <Image
                  src={teckmap[t]}
                  key={t + 'project-teck'}
                  alt={t}
                  width={40}
                  height={40}
                  className="h-10 w-10 mr-2"
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-24 rounded-lg transition duration-300 hover:scale-105  gradient_btn"
              >
                <p>GITHUB</p>
                <Image
                  src="/techsvgs/github.svg"
                  alt="github"
                  width={20}
                  height={20}
                  className="h-8 w-8 "
                />
              </a>
            )}
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg h-10 w-24 transition duration-300 hover:scale-105 gradient_btn"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </motion.div>
      <div className="absolute top-1/4 md:top-1/2 left-0 right-0 flex justify-between items-center w-screen sm:w-full">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-violet-500/[0.01] rounded-xl p-3 sm:p-5"
        >
          <FcPrevious className="text-3xl" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className=" bg-violet-500/5 rounded-xl p-3 sm:p-5"
        >
          <FcNext className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
