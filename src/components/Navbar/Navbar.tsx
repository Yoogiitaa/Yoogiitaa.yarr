'use client'
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className='text-xl font-buenos-aires'>Okalrightyy</h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Add your navigation links here */}
                            <a href="#about" className="text-gray-400 hover:bg-pink-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#work" className="text-gray-400 hover:bg-pink-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Work</a>
                            <a href="#contact" className="text-gray-400 hover:bg-pink-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            <button className='bg-pink-400 text-sm text-white hover:bg-pink-500 px-4 py-2 rounded-lg '>Download CV</button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3">
                    {/* Add your navigation links here */}
                    <a href="#about" className="text-gray-300 hover:bg-pink-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#work" className="text-gray-300 hover:bg-pink-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Work</a>
                    <a href="#contact" className="text-gray-300 hover:bg-pink-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    <button className='bg-pink-400 text-sm text-white hover:bg-pink-500 px-4 py-2 rounded-lg '>Download CV</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;