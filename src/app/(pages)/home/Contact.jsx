'use client';

import React from 'react';
import Image from 'next/image';
import { services } from '@/utils/data';

export default function Contact() {
  return (
    <footer className=" md:mt-20 bg-slate-100/5 rounded-xl backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="block lg:hidden">
              <Image src="/profile.png" alt="logo" width={100} height={100} />
            </div>

            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded gradient_btn lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium ">
                  Connect and <span className="gradient_title">Construct</span>
                </h2>

                <p className="mt-4 max-w-lg ">
                  Let's create something amazing together! I'm passionate about collaborating with
                  others to build innovative solutions.
                  <br />
                  Looking for an enthusiastic partner to bring your ideas to life? Let's connect and
                  see what we can build!
                </p>
              </div>

              <form
                className="mt-8 text-gray-800 space-y-4 flex items-center justify-center flex-col "
                action="https://formspree.io/f/mlezyjdr"
                method="post"
              >
                <input
                  name="Name"
                  type="text"
                  className="!w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Input your name"
                  maxLength="30"
                  required
                />
                <input
                  name="Email"
                  type="email"
                  className="!w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Input your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  className="!w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Write your massege here"
                  rows={4}
                  maxLength="500"
                  required
                ></textarea>
                <button
                  className="gradient_btn  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  type="submit"
                >
                  Get in touch
                </button>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden lg:flex gap-5 items-center">
              <Image src="/profile.png" alt="logo" width={100} height={100} />
              <p className="gradient_title text-2xl sm:text-4xl font-thin uppercase">
                Abdelrhman Samy Saad
              </p>
            </div>

            <div className="m-8 ">
              <p className="font-bold ">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                {services &&
                  services.map((service) => (
                    <li key={service.title + 'service'} className=" gradient_text">
                      {service.title}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="mt-8 text-xs ">&copy; 2023. Abdelrhman Saad. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
