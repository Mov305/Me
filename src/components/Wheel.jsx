'use client';
import React, { useState, useEffect } from 'react';
import { motion, scroll } from 'framer-motion';

const nameVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },

  visible: {
    opacity: [0, 1],
    y: [5, 0],
    transition: {
      duration: 0.25,
    },
  },
};

export default function Wheel() {
  const [wheel, setWheel] = useState(true);

  useEffect(() => {
    const handleWheel = () => {
      scroll((progress) => {
        if (progress > 0.005) {
          setWheel(false);
        } else {
          setWheel(true);
        }
      });
    };

    handleWheel();
  }, []);
  return (
    <motion.button
      initial="hidden"
      animate={wheel ? 'visible' : 'hidden'}
      // onclick scrool down to the next section
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }}
      variants={nameVariants}
      className="flex justify-center p-1 -translate-x-1/2 w-8 h-12 border-2 border-[#cac2ca] opacity-75 rounded-full"
    >
      <span className="bg-[#cac2ca] w-0.5 h-3 rounded-full animate-pulse"></span>
    </motion.button>
  );
}
