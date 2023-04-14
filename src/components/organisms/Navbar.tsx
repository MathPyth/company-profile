import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import Image from 'next/image'
import Link from 'next/link'

const navigations = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#project' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    return (
        <div className="md:mx-16 mx-0">
            <svg
                className="absolute inset-y-0 right-0 hidden  h-full w-48 translate-x-1/2 transform text-white lg:hidden"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                    <nav
                        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                        aria-label="Global"
                    >
                        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="#">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <div className="text-lg font-bold text-gray-400">
                                        <Image
                                            src="/mathpy.png"
                                            width={70}
                                            height={70}
                                            alt="logo"
                                        />
                                    </div>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        <GiHamburgerMenu />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                            {navigations.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="font-light text-gray-500 hover:text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <div className="text-lg font-bold text-gray-400">
                                        MathPy
                                    </div>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close main menu
                                        </span>
                                        <AiOutlineClose />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigations.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default Navbar
