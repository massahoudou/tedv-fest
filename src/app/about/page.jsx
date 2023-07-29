"use client"
import { FillButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import SmallHeading from "@/components/SmallHeading";
import SectionContact from "@/components/sections/SectionContact";
import { Anton } from 'next/font/google'
import Image from "next/image";

import { useEffect } from 'react';
import AOS from 'aos';

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const About = () => {
    useEffect(() => {
        AOS.init({
          once: false ,
        }); 
      },[])
    return <>
        <Navbar />
        <header className="bg-black bg text-white lg:h-[40rem]  relative ">
            <div className="flex flex-wrap   lg:flex-nowrap lg:w-10/12 w-11/12 mx-auto md:gap-8  py-20 lg:h-full items-center relative z-20 ">
                <div className=" w-full h-fit pt-10 md:p-0   lg:w-4/12">
                    <Heading>
                        <h1 className=" py-2 lg:p-0 md:mb-4 md:text-left ">
                            A propos
                        </h1>
                    </Heading>

                </div>
                <div className="  w-full lg:w-8/12 text-xl pt-10  md:py-0 ">
                    <Heading>
                        <div className=" text-transparent uppercase  text-2xl  md:text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-300">
                            DATE : 25 et 26 Août 2023
                        </div>
                    </Heading>
                    <div>
                        <h2 className={` underline font-bold my-5 text-xl`}>Theme </h2>
                        <p className="md:text-4xl">
                            Transformation numérique : alliée du développement durable
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[60px] scale-125  absolute top-20  -left-24`}>

            </div>
        </header>
        <section className="py-20  md:py-10 lg:py-0  lg:h-[30vw] lg:w-10/12 w-11/12 flex md:items-center  flex-col mx-auto justify-start md:justify-center">
            <Heading>
                <h3 className=" py-2 lg:p-0 md:mb-4">Qui somme nous </h3>
            </Heading>

            <p className=" w-full md:w-7/12 text-left  py-3 lg:py-5 mb-3  md:text-center" dat-aos="fade-up" data-aos-="100">
                Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu.
            </p>
            
            <FillButton title="Contacter-Nous" />
        </section>
        <section className="lg:w-10/12 w-11/12 mx-auto  relative  md:py-0  h-fit ">
        <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-[35rem] w-[35rem] opacity-40 lg:scale-110  -right-80 lg:right-0  blur-3xl  absolute  `}>

</div>
            <div className=" flex flex-wrap md:flex-nowrap items-center gap-10 h-full  mx-auto  justify-center">
               
            
              <Image
              className="w-full h-full" data-aos="flip-left"
                className="h-full w-full   "
                          src="/images/4.jpg"
                          loading="lazy"
                          width={300}
                          height={300}
                      
                          alt="spo"
                      />
                
             
                <div className=" my-10   md:p-0  ">
                    <Heading>
                        <h4 className="md:text-left lg:p-0 mb-4">Objectifs</h4>
                    </Heading>
                    <ul className="lg:py-5">
                        <li className="flex gap-3 my-3 mb-2  " data-aos="fade-up" data-aos-delay="100">
                            <span className="text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="text-gray-800">
                                <div className="text-2xl  text-black font-semibold mb-2">Title</div>

                                Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                                impact sur l'environnement.
                            </div>
                        </li>
                        <li className="flex gap-3 my-3 mb-2  " data-aos="fade-up" data-aos-delay="100">
                            <span className="text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="text-gray-800">
                                <div className="text-2xl  text-black font-semibold mb-2">Title</div>

                                Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                                impact sur l'environnement.
                            </div>
                        </li>
                        <li className="flex gap-3 my-3 mb-2  " data-aos="fade-up" data-aos-delay="100">
                            <span className="text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="text-gray-800">
                                <div className="text-2xl  text-black font-semibold mb-2">Title</div>

                                Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                                impact sur l'environnement.
                            </div>
                        </li>
                        
                    
                    </ul>
                </div>
            </div>


        </section>
        <section className="py-20  lg:w-10/12 w-11/12 flex items-center flex-col mx-auto  justify-center">
            <Heading>
                <h5 className=" py-2 lg:p-0 md:mb-4 "  >Pour Quoi participer </h5>
            </Heading>


            <div className="flex  pt-10 md:pt-20 gap-10 flex-wrap md:flex-nowrap">
                <div className="w-full lg:w-4/12 border-[1px] py-4 px-2  hover:bg-gray-100 hover:scale-105 hover:shadow-lg duration-300  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoi pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
                <div className="w-full lg:w-4/12 border-[1px] py-4 px-2  hover:bg-gray-100 hover:scale-105 hover:shadow-lg duration-300  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoi pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
                <div className="w-full lg:w-4/12 border-[1px] py-4 px-2  hover:bg-gray-100 hover:scale-105 hover:shadow-lg duration-300  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoi pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
            </div>
        </section>
        <SectionContact />

    </>

}

export default About; 