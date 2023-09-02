'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoMdArrowDropdown } from 'react-icons/io';
import { skills, services } from '@/utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid, A11y } from 'swiper/modules';
// components
import ServiceCard from '@components/ServiceCard';

// css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

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

const variantName = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    height: 'auto',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    height: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
    },
  },
};

export default function App() {
  const tabs = ['All', 'programming language', 'frontend', 'backend', 'database', 'tools', '3d'];
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('All');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const filterSkills = (tab) => {
    setFilteredSkills([]);
    if (tab === 'All') {
      return skills;
    } else {
      return skills.filter((skill) => skill.type.includes(tab));
    }
  };

  return (
    <div className="flex flex-col p-5  ">
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.button
          className="flex items-center justify-between w-full bg-gradient-to-br from-violet-500/20 via-transparent to-transparent backdrop-blur-[2px] shadow-sm rounded-xl p-3 sm:p-5"
          whileTap={{ scale: 1.005 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className=" gradient_text text-2xl sm:text-4xl font-thin uppercase">SKILLS</div>
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.5 }}
          >
            <IoMdArrowDropdown className="text-3xl" />
          </motion.div>
        </motion.button>

        <motion.div
          variants={variantName}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          className=" p-1 sm:p-3 w-full text-xl sm:text-2xl font-thin uppercase mt-5 sm:mt-10 bg-slate-500/10 backdrop-blur-sm shadow-sm rounded-xl  "
        >
          <ul className="flex flex-col gap-2 md:flex-row justify-between w-full p-5 ">
            {tabs.map((item) => (
              <li
                key={item + 'tab'}
                className={`${item === selectedTab && 'gradient_title'} cursor-pointer `}
                onClick={() => {
                  setSelectedTab(item);
                  setFilteredSkills(filterSkills(item));
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Grid, A11y]}
            slidesPerGroup={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="!max-w-[85vw] sm:!max-w-[70vw] md:!max-w-none"
          >
            {filteredSkills &&
              filteredSkills.map((skill) => (
                <SwiperSlide
                  key={skill.title + 'skillset'}
                  className="p-1 sm:p-3 m-1 bg-slate-50/10 rounded-lg skill_item hover:bg-slate-50/5 transition !w-24 sm:!w-32 !h-auto cursor-default"
                >
                  <motion.div
                    variants={nameVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col items-center justify-between h-full"
                  >
                    <Image
                      src={skill.svg}
                      alt={skill.title}
                      width={100}
                      height={100}
                      className="object-contain h-12 w-12 sm:h-16 sm:w-16"
                    />
                    <div className=" text-sm sm:text-base md:text-lg font-thin uppercase w-12 sm:w-16 text-center skill_text text-ellipsis overflow-hidden whitespace-nowrap">
                      {skill.title}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </motion.nav>
      <div className="my-5 sm:my-10">
        <div className="flex items-center justify-between w-full bg-gradient-to-br from-violet-500/20 via-transparent to-transparent shadow-sm rounded-xl p-3 sm:p-5">
          <div className=" gradient_text text-2xl sm:text-4xl font-thin uppercase">SERVICES</div>
        </div>
        <motion.div
          variants={{
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
          }}
          initial="hidden"
          whileInView="visible"
          exit={{ opacity: 0 }}
          className="flex flex-wrap gap-2 justify-between w-full mt-5 sm:mt-10 "
        >
          {services &&
            services.map((service) => (
              <ServiceCard key={service.title + 'service'} service={service} />
            ))}
        </motion.div>
      </div>
    </div>
  );
}
