import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { Fragment} from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const links = [
    { name: 'Email', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  const people = [
    {
      id: 1,
      name: 'Software Engineering 1'
    },
    {
      id: 2,
      name: 'Software Engineering 2'
    },
    {
      id: 3,
      name: 'Web Developement'
    },
    {
      id: 4,
      name: 'Intro to Computer Graphics'
    },
    {
      id: 5,
      name: 'Discrete Mathematics'
    },
    {
      id: 6,
      name: 'Operating Systems'
    },
    {
      id: 7,
      name: 'Assembly Language'
    },
    {
      id: 8,
      name: 'Data Structures'
    },
  ]
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function AboutPage() {
    const [darkMode, setDarkMode] = useState(true);
    const [selected, setSelected] = useState(people[3])

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyJacob</h1>
            <ul className="flex items-center">
            <Link href="/">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Home</button>
                </Link>
                <Link href="/photography">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8">Photography</button>
                </Link>
              <li className="pl-8">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">Hello!</h2>
          <p className="mt-6 text-lg leading-8 text-black dark:text-white">
            I am Jacob Heinrich. After spending 8 years in the military I decided to pursue my love 
            for technology. This lead me pursue a B.S. in Computer Science from Colorado 
            State University and have had the opportunity to start working at Geek Squad in 2022 while I finish my degree.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <div>
                <h1>Email: jacobheinrich45@gmail.com</h1>
            </div>
            <div>
                <h1>Github: <a href="https://github.com/jacohein" target="_blank" className="hover:text-cyan-300" >jacohein</a></h1>
            </div>
            <div>
            <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">Courses Taken</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
            </div>
          </div>
          <div className="pt-4 text-center text-white dark:text-black">
          {
            selected.id === 1 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Microservice Implementation</h1><p className="font-thin">For this project I was tasked to write a microservice to handle email communications for my group member's project. I wrote this service in Python using the packages email and smtplib. </p></div> : 
            selected.id === 2 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Unit Testing <p className="font-thin">During this class I learned more about unit testing. This includes Black Box Testing, White Box Testing, Random Testing, Test Driven Development, Continuous Integration, and doing code reviews with group members.</p></h1></div> : 
            selected.id === 3 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Full Stack MERN Application<p className="font-thin">Had to build a web application using MondoDB for the database, Express.js to build an API to communicate, React to build the front end, and Node.js to run. </p></h1></div> :
            selected.id === 4 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Intro to Computer Graphics</h1></div> :
            selected.id === 5 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Discrete Mathematics</h1></div> :
            selected.id === 6 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Operating Systems</h1></div> :
            selected.id === 7 ? <div className="p-1.5 rounded-lg bg-gray-900 dark:bg-white w-1/2 min-h-fit"><h1 className="font-bold">Assembly Language</h1></div> :
            <h1>Data Structures</h1> 
          }
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-black">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
              </div>
            ))}
                    </dl>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    );
}