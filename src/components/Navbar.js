'use client';
import React, { useState } from "react";
import Image from "next/image";
const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggleNavBar = () => {
        console.log("hello")
        setToggle(!toggle);
    }

    return <>
        <nav>
            <div className={` ${toggle ? "h-screen bg-black/20 backdrop-blur-lg" : "h-20 bg-black "} fixed top-0 lg:hidden overflow-hidden   w-full transition-all duration-300 z-20`}>
                <div className="w-11/12 mx-auto ">
                    <div className="flex flex-row justify-between items-center p-5">
                        <Image
                            src="/images/tdev.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                        <button className=" text-white" onClick={toggleNavBar} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="flex gap-16 h-screen flex-col text-xl items-center justify-start mt-10 text-white">
                            <li>Accueil</li>
                            <li>Intervenants </li>
                            <li>Programme</li>
                            <li>hackacton</li>
                            <li>Faq</li>
                        </ul>
                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className="hidden lg:block bg-black ">
                <div className="flex h-24 w-10/12 mx-auto items-center  justify-between z-20 ">
                    <div className="flex items-center justify-center ">
                        <Image
                            src="/images/tdev.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />

                        <ul className="flex gap-16  flex-row  items-center  text-white">
                            <li>Accueil</li>
                            <li>Intervenants </li>
                            <li>Programme</li>
                            <li>hackacton</li>
                            <li>Faq</li>
                        </ul>
                    </div>

                    <div className="text-white border-2 border-red-400 w-fit">
                    <a className='btn  bg-white text-black'>Inscription </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;