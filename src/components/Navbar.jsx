'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FillButton } from "./Button";
import Link from "next/link";
import Links from "@/data/Links.";
import { usePathname } from "next/navigation";
const Navbar = ({ black }) => {
    const pathname = usePathname() ;
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const isScrolling = () => {
    
        setIsSticky(window.scrollY > 100 ? true : false);
        if (isMobile && toggle) {
            setToggle(false);
        }
    };

    const toggleNavBar = () => {
        setToggle(!toggle);
    }

    const checkMobileOrTablet = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 1300);
    };

    useEffect(() => {
        checkMobileOrTablet();
        window.addEventListener('scroll', isScrolling);
        window.addEventListener('load', isScrolling);
        window.addEventListener('resize', checkMobileOrTablet() );

        return () => {
            window.removeEventListener('scroll', isScrolling);
            window.removeEventListener('load', isScrolling);
        };
    }, []);
    return <>
        <nav>
            <div  className={` ${isSticky ? "bg-black/70 backdrop-blur-lg " : ""} ${toggle ? "h-screen bg-black/70 backdrop-blur-lg  duration-300 transition-all  " : "h-20 duration-300 transition-all "}  ${isMobile ? "fixed top-0  block" : "hidden "} overflow-hidden   w-full   z-50`}>
                <div className="w-11/12 mx-auto ">
                    <div className="flex flex-row justify-between items-center p-5">
                        
                        <Image
                            src="/images/tdev.png"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <button data-aos="fade-right" className=" text-white" onClick={toggleNavBar} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="flex gap-16 h-screen flex-col text-xl items-center justify-start mt-10 text-white">
                            {Links.map((link,key) => {
                                return <li key={link.name} >
                                    <Link onClick={()=> toggleNavBar()} passHref href={`${link.link}`} key={key} data-aos="zoom-in" data-aos-delay={key * 100 } >
                                        <span data-aos="fade-up" data-aos-delay={key * 100}>
                                        {link.name}
                                        </span>
                                    </Link>
                                    
                                </li>

                            })}
                       
                        </ul>
                        
                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className={` ${isSticky ? "bg-black/70 backdrop-blur-lg " : ""}   ${isMobile ? "hidden" : "fixed block top-0"}   h-fit w-full  z-50 `}>
                <div className="flex h-24 w-10/12 mx-auto items-center  justify-between z-20 ">
                    <div className="flex items-center justify-center gap-10">
                        <Image
                            src="/images/tdev.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                        <ul className={` ${black ? isSticky ? "text-white" :"text-black": "text-white" } flex gap-16  flex-row  items-center  `}>
                            {Links.map((link,key) => {
                                return <li key={link.name} >
                                    <Link passHref href={`${link.link}`} key={key}  className={` ${pathname == link.link ? "active " : " holover "} link `}>
                                        <div data-aos="fade-right" data-aos-delay={key * 50}>
                                        {link.name}
                                        </div>
                                       
                                    </Link>
                                </li>

                            })}


                        </ul>
                    </div>
                    <div className="text-white   w-fit">
                        <FillButton title="Inscription " />
                    </div>
                </div>
            </div>
        </nav >
    </>
}

export default Navbar;