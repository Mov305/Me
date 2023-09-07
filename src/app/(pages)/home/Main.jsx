'use client';
import MainCanvas from './MainCanvas';
import Mov from './Mov';
import Details from './Details';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import { motion } from 'framer-motion';

const nameVariants = (x) => ({
  hidden: {
    opacity: 0,
    x: x,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
});

export default function Main() {
  return (
    <div className="relative w-full">
      <main className="flex w-full min-h-screen flex-col items-center justify-between relative z-[1]">
        <div id="mov" className="h-screen w-full">
          <Mov />
        </div>
        <motion.div
          variants={nameVariants(100)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="details"
          className=" min-h-screen "
        >
          <Details />
        </motion.div>
        <motion.div
          variants={nameVariants(-100)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="services"
          className=" w-full min-h-screen"
        >
          <Services />
        </motion.div>
        <motion.div
          variants={nameVariants(100)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="projects"
          className=" w-screen md:w-full min-h-screen"
        >
          <Projects />
        </motion.div>
        <div id="contact" >
          <Contact />
        </div>
      </main>
      <motion.div
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        className="fixed z-0 w-full h-screen top-0 left-0"
      >
        <MainCanvas />
      </motion.div>
    </div>
  );
}
