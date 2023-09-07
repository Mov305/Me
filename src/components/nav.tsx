'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScrolly } from '@/utils/hooks';

// font
import { lobster } from '@/utils/font';

// icons
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const navs = [
  {
    name: 'Details',
    href: '/home#details',
    id: 'details',
  },
  {
    name: 'Services',
    href: '/home#services',
    id: 'services',
  },
  {
    name: 'Projects',
    href: '/home#projects',
    id: 'projects',
  },
  {
    name: 'Contact',
    href: '/home#contact',
    id: 'contact',
  },
];

const socials = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/abd-samy',
    icon: BsLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Mov_abd',
    icon: BsTwitter,
  },
  {
    name: 'Github',
    href: 'https://github.com/mov305',
    icon: BsGithub,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Mov305',
    icon: BsFacebook,
  },
];

export default function Nav() {
  const activeId = useScrolly(
    navs.map((nav) => nav.id),
    80,
  );

  return (
    <nav
      className={
        'flex md:flex-col w-full md:w-auto justify-around md:justify-normal fixed z-10 top-0 left-0 dark:text-[#b9b6af] md:min-h-screen md:items-center md:pb-2 backdrop-blur-sm md:backdrop-blur-0 ' +
        lobster.className
      }
    >
      <div className=" flex items-center justify-between md:p-2 ">
        <div className="flex items-center md:flex-shrink-0">
          <Link href="/#mov">
            <Image
              src="/profile.png"
              alt="Profile"
              width={120}
              height={120}
              priority={true}
              className=" w-16 md:w-20 md:ml-1 rounded-full logo_img"
            />
          </Link>
        </div>
      </div>
      <div className="md:flex flex-col items-center w-full mt-6 p-2 gap-16 hidden">
        {navs.map((nav, index) => (
          <Link href={nav.href} key={index + 'nav_link'} className="nav_link relative">
            <div className="gradient_text transition-all duration-300">{nav.name}</div>
            <span
              className={
                'block w-0 h-1 -z-10 bg-gradient-to-r from-[#ff0080] to-[#7928ca] rounded-full absolute top-1/2 right-[-15%] transition-all duration-500 delay-100' +
                (activeId === nav.id ? ' wx130' : '')
              }
            ></span>
          </Link>
        ))}
      </div>
      <span className="block bg-gradient-to-b from-violet-500 to-cyan-300 opacity-5 md:opacity-50 w-0.5 md:flex-grow md:my-10"></span>
      <div className="flex justify-around justify-self-end md:ml-0 md:flex-col gap-4 items-center">
        {socials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <social.icon className={'w-6 h-6 transition delay-150 ' + social.name} />
          </a>
        ))}
      </div>
    </nav>
  );
}
