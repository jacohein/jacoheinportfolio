import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Link  from "next/link";
import jake_wave from "../public/jacob_w.png";
import education from "../public/education.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jacob Heinrich Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyJacob</h1>
            <ul className="flex items-center">
            <Link href="/photography"><button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Photography</button></Link>
            <Link href="/about"><button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">About</button></Link>
              <li className="pl-8">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Jacob Heinrich
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              NEED TO FILL IN
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={jake_wave} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-bold underline decoration-solid pt-8 pb-2 ">
                Technical Skills
              </h3>
              <h4 className="py-4 text-teal-600">Python</h4>
              <p>The first language I learned.</p>
              <h4 className="py-4 text-teal-600">C</h4>
              <p>The language I am the most comfortable in.</p>
              <h4 className="py-4 text-teal-600">HTML/CSS</h4>
              <p>Built upon my passion for Web Development.</p>
              <h4 className="py-4 text-teal-600">Javascript</h4>
              <p>Same as above, built on my passion for Web Dev.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-bold underline decoration-solid pt-8 pb-2 ">Certifications and Awards</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Certifications</h4>
              <p className="text-gray-800 py-1">Apple Certified Technician</p>
              <h4 className="py-4 text-teal-600">Awards</h4>
              <p className="text-gray-800 py-1">Air Force Meritorious Service Medal</p>
              <p className="text-gray-800 py-1">Afghanistan Campaign Medal</p>


            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
