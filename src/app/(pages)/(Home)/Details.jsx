import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Details() {
  const experience = [
    {
      title: 'Full-Stack Developer',
      volunteer: false,
      company: 'Freelance',
      date: '06/2020 - Present',
    },
    {
      title: 'Code Reviewer & Mentor',
      volunteer: true,
      company: 'Microverse',
      date: '06/2022 - 08/2023',
    },
  ];

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: [0, 1],
      y: [5, 0],
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.section className=" bg-slate-500/10 backdrop-blur-sm border min-h-[94vh] border-gray-400/50 shadow-sm rounded-xl m-5">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="">
            <Image
              alt="Party"
              src="/me.jpg"
              className="framed rounded-lg lg:h-[500px] lg:w-[350px] object-cover object-center"
              height={600}
              width={400}
              loading="lazy"
            />
          </div>
          <div className="lg:pt-14 lg:col-span-2">
            <h2 className="text-3xl font-bold sm:text-4xl gradient_title">WHO AM I?!</h2>

            <p className="mt-4 sm:text-lg md:text-xl text-gray-200">
              Passionate full-stack developer with 4+ years of experience building and shipping
              software solutions. Proficient in cutting-edge technologies. Experienced with Next.js
              and Ruby on Rails. Quickly masters new technologies and thrives when collaborating and
              pair programming. Eager to join a forward-thinking company pushing technological
              boundaries. Bring a learner's mindset, creative problem-solving, and commitment to
              shipping quality products users love.
            </p>

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mt-8 gradient_title">Experience</h2>
              <div className="mt-4 flex gap-4 flex-col w-full">
                {experience.map((job) => (
                  <motion.div
                    variants={nameVariants}
                    initial="hidden"
                    whileInView="visible"
                    key={job.title + 'ex'}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                        <h3 className="text-xl uppercase font-bold">{job.title}</h3>
                        <h4 className="text-gray-200 ml-4">{job.volunteer ? '(Volunteer)' : ''}</h4>
                      </div>
                      <h4 className="text-gray-200 ml-4">{job.company}</h4>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-200">{job.date}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <a
              href="/Abdelrhman_Samy_Resume.pdf"
              download="Abdelrhman_Samy_Resume.pdf"
              className="mt-8 inline-block rounded px-12 py-3 sm:text-xl font-medium  transition-all gradient_btn hover:scale-105 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
