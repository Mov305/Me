'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        staggerChildren: 0.2,
        delayChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      className="relative grow sm:min-w-[360px]  block overflow-hidden rounded-lg border border-gray-50/10 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50/10 transition-all duration-300 to-transparent service_card "
    >
      <span className="absolute inset-x-0 bottom-0 h-2 transition bg-gradient-to-r to-teal-300 from-violet-600 opacity-25"></span>

      <div className="flex justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold stroke-black stroke-2 gradient_title sm:text-xl md:text-3xl">
            {service.title}
          </h3>
        </div>

        <div className="sm:shrink-0 sm:hidden">
          <Image
            alt={service.title}
            src={service.img}
            className=" w-16  rounded-lg object-cover shadow-sm"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className=" sm:max-w-[40ch] text-sm text-gray-100 md:text-xl">{service.description}</p>
        <div className="hidden sm:block">
          <Image
            alt={service.title}
            src={service.img}
            className=" sm:w-24 lg:w-32  rounded-lg object-cover shadow-sm"
            width={150}
            height={150}
          />
        </div>
      </div>
    </motion.div>
  );
}
