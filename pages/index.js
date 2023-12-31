import Head from "next/head";
import { BsFillMoonStarsFill, BsPerson } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import education from '../public/education.png';
import skidraw from '../public/skidraw.png';
import Image from 'next/image';
import { FaCameraRetro, FaUser, FaBook, FaEnvelope } from 'react-icons/fa';
import { BsPersonCircle, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import csu from '../public/csu.jpeg';
import cudenver from '../public/cudenver.jpeg';
import me from '../public/me.png';
import wave from '../public/jacob_w.PNG';
import res from '../public/JacobResume.jpg';
import { motion, useScroll } from 'framer-motion';



export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [darkMode, setDarkMode] = useState(false);
  const [skillsMode, setSkillsMode] = useState(false);
  const [militarySection, setMilitarySection] = useState(false);
  const [geekSquadSection, setGeekSquadSection] = useState(false);
  const [isRotated, setIsRotate] = useState(false);
  const [milRotate, setMilRotate] = useState(false);
  const [isClass, setClass] = useState(false);
  const [divContent, setDivContent] = useState("Classes!")
  const technicalSkillsRef = useRef(null);
  const awardsCertsRef = useRef(null);
  const containerRef = useRef(null);
  const emailAddress = "jacobheinrich45@gmail.com";
  const GithubProfile = "https://github.com/jacohein";

  const handleArrowClick = () => {
    setGeekSquadSection(!geekSquadSection);
    setIsRotate(!isRotated);
  };

  const handleMilClick = () => {
    setMilitarySection(!militarySection);
    setMilRotate(!milRotate);
  };

  const items = [
    { id: 1, title: "Back End Developer", department: "Engineering", type: "Full-time", location: "Remote" },
    { id: 2, title: "Front End Developer", department: "Engineering", type: "Full-time", location: "Remote" },
    { id: 3, title: "User Interface Designer", department: "Design", type: "Full-time", location: "Remote" },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    let sections = gsap.utils.toArray(".panel");

    // Technical Skills Animation
    const technicalSkillsTween = gsap.to(technicalSkillsRef.current, {
      opacity: 0, // Start with opacity 0
      scrollTrigger: {
        trigger: technicalSkillsRef.current,
        start: "top-=200",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
      x: -350,
      ease: "none",
      duration: 6
    });



    // Awards and Certifications Animation
    const awardsCertsTween = gsap.to(awardsCertsRef.current, {
      opacity: 0, // Start with opacity 0
      scrollTrigger: {
        trigger: awardsCertsRef.current,
        start: "top-=200",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
      x: -350,
      ease: "none",
      duration: 6
    });

    // Cleanup function to remove the scroll trigger when the component unmounts
    return () => {
      technicalSkillsTween.kill();
      awardsCertsTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);



  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jacob Heinrich Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 w-full overflow-x-hidden">
        <div className="before:content-[''] absolute w-full h-full">
          <div className="snow-ball-container">
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
            <div className="snow-ball"></div>
          </div>
        </div>
        <section>
          <nav className="py-4 mb-12 flex justify-between dark:text-white z-100">
            <div>
              {/* <div className="absolute overflow-hidden -z-100 pl-6 pt-4">
                <Image
                  src={skidraw}
                  quality={100}
                  height={250}
                  width={300}
                  priority={true}
                  alt="Crested Butte"
                  className="opacity-50"
                />
              </div> */}
              <h1 className="relative font-burtons text-xl pl-10 z-1">developedbyJacob</h1>
            </div>
            <div className="hidden lg:flex pr-10">
              <ul className="flex items-center">
                <li>
                  <a
                    className="relative bg-gradient-to-r from-sky-500 text- to-sky-700 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/Resume"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="relative pl-8">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
              </ul>
            </div>
          </nav>
          <div className="h-screen pt-36 text-center w-full">
            <h2 className="relative lg:text-9xl text-teal-600 font-medium dark:text-white md:text-9xl italic font-serif text-black opacity-60">
              Jacob Heinrich
            </h2>
            <div className="relative lg:text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white text-black">
              <Link href="#about"><button className="opacity-60 transition ease-in-out hover:opacity-100 duration-500"><FaUser /></button></Link>
              <Link href="#education"><button className="opacity-60 transition ease-in-out hover:opacity-100 duration-500"><FaBook /></button></Link>
              <Link href="#contact"><button className="opacity-60 transition ease-in-out hover:opacity-100 duration-500"><FaEnvelope /></button></Link>
            </div>
          </div>
          <section>
            <div className="scroll-smooth text-center h-screen">
              <div className="technicalSkills" ref={technicalSkillsRef}>
                <h1 className="relative font-anton lg:text-6xl text-4xl font-bold dark:text-white p-4 opacity-80">
                  Welcome to my portfolio!
                </h1>
              </div>
            </div>
          </section>
          <section>
            <div className="scroll-smooth text-center h-screen">
              <div className="awardCerts" ref={awardsCertsRef}>
                <h1 className="relative font-anton lg:text-6xl text-4xl font-bold dark:text-white p-4 opacity-80">
                  Software Developer
                </h1>
              </div>
            </div>
          </section>
        </section>
        <section className="h-full">
        </section>
        <section id="education" className="h-screen text-center">
          <div>
            {isClass ? 
          <div className="xl:absolute lg:right-80 lg:p-4 w-64 dark:text-white bg-sky-500/25 rounded-lg">
            {divContent}</div>:
            <></>}
            <h1 className="text-4xl font-anton font-bold lg:text-6xl pb-6 dark:text-white">
              Education
            </h1>
            <h2 className="text-4xl font-anton dark:text-white">
              Bachelor of Science Computer Science
            </h2>
            <ul className="dark:text-white">
              <li>Web Development</li>
              <li>Operating Systems</li>
              <li>Software Engineering I & II</li>
              <li>Structures</li>
              <li>Architecture and Assembly Language</li>
            </ul>
            <h2 className="text-4xl pt-10 font-anton dark:text-white">
              Bachelor of Arts Economics
            </h2>
            <ul className="dark:text-white">
              <li>Econometrics</li>
              <li>Microeconomics</li>
              <li>Macroeconomics</li>
              <li>Statistics w/ Computer Applications</li>
            </ul>
          </div>
        </section>
        <section id="about">
          <div className="dark:text-white rounded-lg opacity-80 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-12">
            <div>
              <h2 className="text-4xl pl-6 pt-6 font-rajdhani font-bold">
                Hey, I&apos;m Jacob!
              </h2>
              <p className="pt-6 pl-6 pr-6 pb-6 md:pb-0 text-lg font-rajdhani font-bold">
                With eight years of service in the military, I embarked on a journey to pursue my true passion: technology.
                This led me to Colorado State University, where I pursued a second Bachelor&apos;s degree in Computer Science. Through my studies, I delved deep into the world of coding and software development,
                exploring intricate concepts such as data structures, algorithms, and web development.
                This journey ignited a love for software engineering within me. The process of crafting elegant code and building innovative solutions resonated deeply,
                captivating my curiosity and inspiring my creativity.
              </p>
            </div>
            <div className="row-start-2 col-span-1">
              <h1 className="pl-6 text-4xl font-rajdhani font-bold underline">2013 - 2021</h1>
              <p className="pl-6 pr-6 pt-2 pb-6 text-lg font-rajdhani font-bold">
                In my eight years of military service, I gained invaluable skills and learned lessons that have shaped my approach to challenges.
                My role as an Aircraft Armament Technician demanded precision, expertise, and quick thinking in troubleshooting and repairing weapons systems on F-16 Aircraft. This hands-on experience not only deepened my technical knowledge but also taught me
                about determination through failure which has helped me on the journey of switching career paths.
                My role in the military led me to gain experience in deciphering complex wiring diagrams, emphasizing the importance of attention to detail and meticulous problem-solving. This experience instilled in me a passion
                for understanding intricate systems—a passion that seamlessly translates into my enthusiasm for software engineering.
              </p>
            </div>
            <div className="col-span-2">
              <h1 className="pl-6 text-4xl font-rajdhani font-bold underline">2021 - Current</h1>
              <p className="pl-6 pr-6 pt-2 pb-6 text-lg font-rajdhani font-bold">
                During my time at Colorado State University, I had the privilege of working with Geek Squad—my first experience outside of the military in almost a decade.
                This experience not only sharpened my technical skills but also honed my abilities in effective communication and conflict resolution.
                Navigating the diverse landscape of IT challenges, I learned the importance of clear communication, patience, and adaptability. Resolving software issues became more than just technical problem-solving;
                it became an opportunity to bridge gaps, ease frustrations, and foster positive interactions.
                This experience reinforced my passion for technology and its potential to transform lives. It also affirmed my belief in the power of empathy and understanding in overcoming technical hurdles.
                As I transition into a career as a software engineer, I carry these lessons with me, ready to approach every
                challenge with a unique blend of technical expertise and human connection.
              </p>
            </div>
            <div className="col-start-2 row-start-1 pt-16">
              <Image
                className="rounded-lg dark:opacity-80"
                width={500}
                height={500}
                src={wave}
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="pt-96 opacity-80">
      <div className='text-center'>
        <h1 className='text-5xl pt-10 font-rajdhani dark:text-white'>Projects</h1>
        <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [180, 180, 0, 0, 180],
              borderRadius: ["50%", "50%", "0%", "0%", "50%"],
              backgroundColor:["#87CEEB"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
      </div>
      <div>
     <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="background" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} className='list'>
        <li className='listElement text-center'>
          <h1 className='text-4xl bg-sky-500/50 p-6 font-rajdhani font-bold'>
           Harmony
          </h1>
          <h3 className="pt-6 text-2xl underline">About</h3>
            <div className="flex justify-center items-center">
              <p className="w-3/4">
                Harmony is a real-time musical companion app that enriches musical experiences by allowing musicians to share active notes and learn from one another as they play. Our application revolves around the use of a Raspberry Pi, which serves as the driver of a musical session. The Raspberry Pi is responsible for processing a stream of audio MIDI data output from a musical instrument, played by a host
                user—a musician whose device is connected directly to the Pi. As the Pi begins receiving MIDI data, it will transmit notes across a web socket to a group of musicians. The musicians can use the received information to better inform their own playing, and harmonize with the group. Understanding the notes being played during a
                music session, can aid collaborative play, and allow a musician to understand notes, melody, keys, and more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl underline">Languages Used</h3>
              <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>HTML/CSS</li>
              </ul>
              <h3 className="text-2xl underline">Frameworks and Packages Used</h3>
              <ul>
                <li>Flask</li>
                <li>socketIO</li>
                <li>rtmidi</li>
                <li>mido</li>
                <li>threading</li>
              </ul>
              <h3 className="text-2xl pt-6">Project Report</h3>
              <Link href="https://docs.google.com/document/d/1Qz7Vkds5nbaSZ6uhhpMQFF0_ont5fWpk8qKzJYdXYjU/edit?usp=sharing" target="_blank" className="p-2 bg-sky-500 hover:bg-sky-500/50 rounded-lg text-white" rel="noopeneer noreferrer">Report Link</Link>
            </div>
        </li>
        <li className='listElement text-center'>
          <h1 className='text-4xl bg-sky-500/50 p-6 font-rajdhani font-bold'>
           Portfolio Website
          </h1>
          <h3 className="pt-6 text-2xl underline">About</h3>
            <div className="flex justify-center items-center">
              <p className="w-3/4">
              Welcome to my portfolio website, a website I built where you can glimpse into who I am and how I approach coding! As a dedicated developer, I&apos;ve poured my passion into this portfolio, creating an site that not only reflects my technical proficiency but also showcases my creative spirit.
              This portfolio is more than just a collection of experience; it&apos;s a representation of my journey and dedication to my journey through software. Each line of code tells a story of problem-solving, innovation, and continuous learning. 
              Thank you for visiting. I hope you enjoy the experience as much as I enjoyed creating it. This portfolio is a testament to my skills, my dedication, and the unique perspective I bring to the world of technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl underline">Languages Used</h3>
              <ul>
                <li>Javascript</li>
                <li>HTML/CSS</li>
              </ul>
              <h3 className="text-2xl underline">Frameworks and Packages Used</h3>
              <ul>
                <li>GSAP</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Framer</li>
              </ul>
            </div>
        </li>
        <li className='listElement text-center'>
          <h1 className='text-4xl bg-sky-500/50 p-6 font-rajdhani font-bold'>
           NASA APOD Website
          </h1>
          <h3 className="pt-6 text-2xl underline">About</h3>
            <div className="flex justify-center items-center">
              <p className="w-3/4">
              Embarking on one of my earliest ventures into React development, this application was the product of my Web Development class at Colorado State University. 
              Fueled by my enduring interest in astronomy, 
              the project centers on the NASA Astronomy Picture of the Day (APoD). Users can input a date in the YYYY-DD-MM format, 
              allowing the application to dynamically fetch and showcase the corresponding image captured by NASA. 
              As I navigated the complexities of React, this project not only became a technical milestone but also a testament 
              to my passion for space exploration. It reflects my journey in React, 
              delving into API integration, asynchronous JavaScript, and crafting a responsive user interface.
              </p>
            </div>
            <div>
              <h3 className="text-2xl underline">Languages Used</h3>
              <ul>
                <li>Javascript</li>
                <li>HTML/CSS</li>
              </ul>
              <h3 className="text-2xl underline">Frameworks and Packages Used</h3>
              <ul>
                <li>React</li>
                <li>NASA API</li>
              </ul>
              <h3 className="text-2xl pt-6">Demo</h3>
              <Link href="https://nasa-apod-alpha.vercel.app/" target="_blank" className="p-2 bg-sky-500 hover:bg-sky-500/50 rounded-lg text-white" rel="noopeneer noreferrer">Demo Link</Link>
            </div>
        </li>
      </ul>
      </div>
      </section>
        <section className="opacity-80 mt-16" id="contact">
          <div className="dark:bg-gray-100 bg-black p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p className="mb-4 text-white dark:text-black">
              Email: <a href={`mailto:${emailAddress}`} className="text-blue-500">{emailAddress}</a>
            </p>
            <p className="text-white dark:text-black">
              GitHub: <a href={GithubProfile} target="_blank" rel="noopener noreferrer" className="text-blue-500">{GithubProfile}</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
