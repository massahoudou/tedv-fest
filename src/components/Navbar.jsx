'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FillButton } from "./Button";
import Link from "next/link";
import Links from "@/data/Links.";
import { usePathname } from "next/navigation";
const Navbar = ({ black }) => {
    const pathname = usePathname();
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

        return () => {
            window.removeEventListener('scroll', isScrolling);
            window.removeEventListener('load', isScrolling);
        };
    }, []);
    return <>
        <nav>
            <div className={` ${isSticky ? "bg-dark/70 backdrop-blur-lg " : ""} ${toggle ? "h-screen bg-black/70 backdrop-blur-lg  duration-300 transition-all  " : "h-[4.5rem] duration-300 transition-all "}  ${isMobile ? "fixed top-0  block" : "hidden "} overflow-hidden   w-full   z-50`}>
                <div className="w-11/12 mx-auto ">
                    <div className="flex flex-row justify-between items-center  p-4">

                        <Image
                            className="-ml-5"
                            src="/images/logo.png"
                            width={45}
                            height={45}
                            alt="Tdev 2023"
                        />
                        <button data-aos="fade-right" className={` ${!isSticky ? black ? "text-dark " : "text-white" : "text-white"}  px-2 py-1 shadow-lg`} onClick={toggleNavBar} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>
                    </div>
                    <div>
                        <ul className="flex gap-12 h-screen flex-col  items-start justify-start mt-10 text-white">
                            {Links.map((link, key) => {
                                if (!link.deseable)
                                    return <li key={link.name} className=" " >
                                        <Link onClick={() => toggleNavBar()} passHref href={`${link.link}`} key={key} data-aos="zoom-in" data-aos-delay={key * 100} className={` ${pathname == link.link ? "active font-semibold " : "   p-2"} link `} >
                                            <span data-aos="fade-up" data-aos-delay={key * 100}>
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                            })}
                            <li>
                                <FillButton href="/inscription" title="S'inscrire maintenant " />
                            </li>
                        </ul>

                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className={` ${isSticky ? "bg-dark/70 backdrop-blur-lg " : ""}   ${isMobile ? "hidden" : "fixed block top-0"}   h-fit w-full  z-50 `}>
                <div className="flex h-24 w-10/12 mx-auto items-center  justify-between z-20 ">
                    <div className="flex items-center justify-center gap-10">
                        <Image
                            src="/images/logo.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                        <ul className={` ${black ? isSticky ? "text-white" : "text-black" : "text-white"} flex gap-6  flex-row  items-center  `}>
                            {Links.map((link, key) => {
                                if (!link.deseable)
                                    return <li key={link.name} className="  p-2" data-aos="fade-right" data-aos-delay={key * 50}  >
                                        <Link passHref href={`${link.link}`} key={key} className={` ${pathname == link.link ? "active font-semibold " : "  "} link `}>
                                            <div>
                                                {link.name}
                                            </div>

                                        </Link>
                                    </li>

                            })}


                        </ul>
                    </div>
                    <div className="text-white   w-fit">
                        <FillButton href="/inscription" title="Inscription " />
                    </div>
                </div>
            </div>
        </nav >
    </>
}

export default Navbar;