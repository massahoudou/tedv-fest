'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FillButton } from "./Button";
import Link from "next/link";
import Links from "@/data/Links.";
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    const isScrolling = () => {
        setIsSticky(window.scrollY > 100 ? true : false);
        if (isMobileOrTablet && toggle) {
            setToggle(false);
        }
    };

    const toggleNavBar = () => {
        console.log("hello")
        setToggle(!toggle);
    }

    const checkMobileOrTablet = () => {
        const screenWidth = window.innerWidth;
        setIsMobileOrTablet(screenWidth < 1024);
    };

    useEffect(() => {
        checkMobileOrTablet();
    }, []);
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
            <div className="hidden md:fixed md:block top-0 h-fit w-full  bg-black/10  z-20 ">
                <div className="flex h-24 w-10/12 mx-auto items-center  justify-between z-20 ">
                    <div className="flex items-center justify-center gap-10">
                        <Image
                            src="/images/tdev.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                        <ul className="flex gap-16  flex-row  items-center  text-white">
                            {Links.map((link) => {
                                return <li key={link.name} >
                                        <Link passHref href={`${link.link}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                
                            })}


                        </ul>
                    </div>
                    <div className="text-white   w-fit">
                        <FillButton title="Incription " />
                    </div>
                </div>
            </div>
        </nav >
    </>
}

export default Navbar;