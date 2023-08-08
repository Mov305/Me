'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrolly } from '@/utils/hooks';

// font
import { lobster } from '@/utils/font';

// icons
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const navs = [
  {
    name: 'Details',
    href: '/#details',
    id: 'details',
  },
  {
    name: 'Services',
    href: '/#services',
    id: 'services',
  },
  {
    name: 'Projects',
    href: '/#projects',
    id: 'projects',
  },
  {
    name: 'Contact',
    href: '/#contact',
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
        'flex sm:flex-col fixed top-0 left-0 dark:text-[#b9b6af] sm:min-h-screen sm:items-center pb-2 ' +
        lobster.className
      }
    >
      <div className=" flex items-center justify-between p-2 ">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/profile.png"
              alt="Profile"
              width={120}
              height={120}
              priority={true}
              className=" w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28 "
            />
          </Link>
        </div>
      </div>
      <div className="sm:flex flex-col items-center w-full mt-6 p-2 gap-16 hidden">
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
      <span className="block bg-slate-400/50 w-0.5 flex-grow my-10"></span>
      <div className="flex sm:flex-col gap-4 items-center">
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