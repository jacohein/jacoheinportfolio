import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import ski from "../../public/ski.jpeg";
import lillypad from "../../public/lillypad.jpeg";
import flower from "../../public/flower.jpeg";
import sanfran from "../../public/sanfran.jpeg";
import ladybug from "../../public/ladybug.jpeg";
import Image from "next/image";
import {AiFillHome} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';

export default function PhotographyPage() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
        <nav className="py-4 mb-12 flex justify-between dark:text-white">
            <div>
            <h1 className="font-burtons text-xl">developedbyJacob</h1>
            </div>
            <div className="hidden lg:flex">
            <ul className="flex items-center">
            <Link href="/"><button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Home</button></Link>
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
              href="/about"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <button className="text-white pr-10 text-2xl"><BsPersonCircle/></button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
          </nav>
          </section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ski}
                quality = {100}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={flower}
                quality = {100}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ladybug}
                quality = {100}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={sanfran}
                quality = {100}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={lillypad}
                quality = {100}
              />
            </div>
          </div>
          </main>
          </div>
    );
}

