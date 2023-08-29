'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, scroll } from 'framer-motion';

// animate the Profile Name
const nameVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  hidden2: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  visible2: {
    opacity: [0, 1],
    y: [5, 0],
    transition: {
      duration: 0.25,
    },
  },
};

export default function Mov() {
  let jobs = ['DESIGNER', 'TYPIST', 'MECHANICAL ENGINEER', 'MODELER', 'MENTOR'];
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
    <section className="flex items-center text-3xl sm:text-5xl p-5 md:p-20  h-full text-[#fdf3ff]">
      <motion.div initial="hidden" animate="visible" variants={nameVariants}>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#cac2ca]">Abdelrhman Samy Saad</h1>
        <h3 className=" mt-4 ">FULL-STACK DEVELOPER</h3>
        <div>
          <span>+ </span>
          <TypeWriter strings={jobs} speed={200} />
        </div>
        <Link href="/#contact">
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
            className="mt-10 text-[#cac2ca] border-2 rounded-full border-[#cac2ca] transition px-10 py-2 hover:bg-[#cac2ca] hover:text-[#fdf3ff] relative"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>

      <Link href="/#details">
        <motion.button
          initial="hidden2"
          animate={wheel ? 'visible2' : 'hidden2'}
          variants={nameVariants}
          className="absolute flex justify-center top-[90vh] right-[50vw] p-1 -translate-x-1/2 w-8 h-12 border-2 border-[#cac2ca] opacity-75 rounded-full "
        >
          <span className="bg-[#cac2ca] w-0.5 h-3 rounded-full animate-pulse"></span>
        </motion.button>
      </Link>
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
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(
        isDeleting
          ? fullText.substring(0, text?.length - 1)
          : fullText.substring(0, text?.length + 1),
      );
      setIsTyping(true);

      setTypingSpeed(isDeleting ? 50 : 200);

      if (!isDeleting && text === fullText) {
        setIsTyping(false);
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsTyping(true);
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

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
