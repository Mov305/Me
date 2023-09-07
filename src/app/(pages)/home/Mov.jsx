'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// animate the Profile Name
const nameVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export default function Mov() {
  let jobs = ['DESIGNER', 'TYPIST', 'MECHANICAL ENGINEER', 'MODELER', 'MENTOR'];

  return (
    <section className="flex items-center text-3xl sm:text-5xl p-2 sm:p-20  h-full text-pink-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={nameVariants}
        className="flex flex-col items-center sm:items-start justify-center h-full w-full"
      >
        <h1 className="text-2xl md:text-4xl font-thin text-[#cac2ca] uppercase">
          Abdelrhman Samy Saad
        </h1>
        <h3 className=" mt-4 ">FULL-STACK DEVELOPER</h3>
        <div>
          <span>+ </span>
          <TypeWriter strings={jobs} speed={200} />
        </div>
        <Link href="/home#contact">
          <motion.button
            whileHover={{
              scale: 1.06,
              y: [0, 5, -5, 0],
              transition: {
                duration: 3,
                repeat: 'loop',
                ease: 'easeInOut',
              },
            }}
            className="mt-10 uppercase font-thin text-[#cac2ca] border-2 rounded-full border-[#cac2ca] transition px-10 py-2 hover:bg-[#cac2ca] hover:text-pink-50"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

// TypeWriter Effect for an array of strings using framer-motion to return a span for each letter
const TypeWriter = ({ strings, speed }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const handleType = () => {
      const fullText = strings[loopNum];

      setText(
        isDeleting
          ? fullText.substring(0, text?.length - 1)
          : fullText.substring(0, text?.length + 1),
      );
      setIsTyping(true);

      setTypingSpeed(isDeleting ? 50 : 130);

      if (!isDeleting && text === fullText) {
        setIsTyping(false);
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsTyping(true);
        setIsDeleting(false);
        if (loopNum === strings.length - 1) {
          setLoopNum(0);
        } else {
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <>
      <span>{text}</span>
      {isTyping ? (
        <span className="font-bold bg-gradient-to-t from-teal-600 to-violet-500 text-transparent bg-clip-text">
          |
        </span>
      ) : (
        <span>.</span>
      )}
    </>
  );
};
