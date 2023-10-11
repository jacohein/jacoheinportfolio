import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { Fragment} from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import jake_wave from "../../public/jacob_w.png";
import Image from "next/image";
import motion from '../../public/motionelements.gif';
import {FaCameraRetro} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/Ai';

export default function AboutPage() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className="bg-white dark:bg-gray-900">
        <section>
        <nav className="py-4 mb-12 flex justify-between dark:text-white">
            <div>
            <h1 className="font-burtons text-xl pl-10">developedbyJacob</h1>
            </div>
            <div className="hidden lg:flex pr-10">
            <ul className="flex items-center">
            <Link href="/"><button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Home</button></Link>
            <Link href="/photography"><button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Photography</button></Link>
              <li className="pl-8">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
            </div>
            <div className="dark:bg-gray-900 flex items-center justify-between lg:hidden">
      <div className="">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
              href="/"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            > 
              <button className="text-white pr-10 text-2xl"><AiFillHome/></button>
            </Link>
            <Link
              href="/photography"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <button className="text-white pr-10 text-2xl"><FaCameraRetro/></button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
          </nav>
          <div className="xl:h-screen xl:grid gap-5 grid-cols-4 grid-rows-4 pl-72">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 row-start-1 row-end-3 col-start-2 col-end-3"><Image src={jake_wave}/></div>
            <div className="row-start-0 row-end-0 col-start-1 col-start-2 pl-10">
              <h1 className="text-center text-white text-4xl font-bold decoration-solid underline font-burtons pt-10 xl:pt-0">Bio</h1>
              <p className="text-white pt-4">
                After spending 8 years as an Aircraft Armament Technician in the Air Force I decided to pursue a career in the technology field. From attending
                Colorado State University for a B.S. in Computer Science I found my passion for solving complex problems through coding. 
              </p>
              <div className="text-white pt-4">
              Along with the technical skills I learned 
              through projects and school work, I have been fortunate to gain experience in:
              <ul className="list-disc pl-4">
                <li>Adaptibility</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Leadership</li>
              </ul>

              </div>
              </div>
            <div className="row-start-0 row-end-0 col-start-3 cold-end-3">
              <h1 className="text-white text-4xl font-bold decoration-solid underline font-burtons pt-24 text-center xl:text-left">Hobbies</h1>
              <p className="text-white pt-4 text-center xl:text-left pl-6">Skiing, Photography, Cooking, Coding</p>
            </div>
            <div className="row-start-2 row-end-2 col-start-3 col-end-3">
              <h1 className="text-center text-white decoration-solid underline text-4xl font-bold font-burtons pt-24 xl:pl-8 xl:text-left">Education</h1>
              <p className="text-center text-white pt-4 xl:text-left xl:pl-6">Colorado State University</p>
              <p className="text-white text-center italic xl:text-left xl:pl-6">B.S. in Computer Science</p>
              <p className="text-center text-white pt-8 xl:text-left xl:pl-6">University of Colorado</p>
              <p className="text-white text-center italic xl:text-left xl:pl-6">B.A. in Economics</p>
            </div>
            <div className="row-start-2 row-end-2 col-start-1 col-end-3">
              <h1 className="text-center text-white decoration-solid underline text-4xl font-bold font-burtons pt-24 xl:pt-60 xl:pr-36">Technology Strengths</h1>
              <p className="text-white xl:pl-16 pt-4 pb-10">Python, HTML/CSS, Javascript, React, Next.js, TailwindCSS</p>
            </div>
            </div>
            </section>
        </main>
    </div>
    );
}