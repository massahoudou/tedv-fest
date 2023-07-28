"use client"
import { FillButton } from "@/components/Button";
import Navbar from "@/components/Navbar";
import SectionContact from "@/components/sections/SectionContact";
import { Anton } from 'next/font/google'



const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const About = () => {

    return <>

        <Navbar />
        <header className="bg-black bg text-white lg:h-[40rem]  relative ">
            <div className="flex flex-wrap   lg:flex-nowrap lg:w-10/12 w-11/12 mx-auto md:gap-8  py-20 lg:h-full items-center relative z-20 ">
                <div className=" w-full h-fit  lg:w-4/12">
                    <h1 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4 uppercase text-center md:text-left `}>
                        A propos
                    </h1>
                </div>
                <div className="  w-full lg:w-8/12 text-xl pt-20  md:py-0 ">
                    <div className=" text-transparent uppercase font-bold text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-300">
                        DATE : 25 et 26 Août 2023
                    </div>
                    <div>
                        <h2 className={`  ${anton.className} underline font-bold my-5 text-4xl`}>Theme</h2>
                        <p className="text-4xl">
                            Transformation numérique : alliée du développement durable 
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[60px] scale-125  absolute top-20  -left-24`}>

            </div>
        </header>
        <section className="py-20  md:py-10 lg:py-0  lg:h-[30vw] lg:w-10/12 w-11/12 flex items-center flex-col mx-auto  justify-center">
            <h3 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4`}>Qui somme nous </h3>
            <p className=" w-full md:w-7/12 text-center py-3 lg:py-5 ">
                Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu.
            </p>
            <FillButton title="Contacter-Nous" />
        </section>
        <section className="bg-black text-white   md:py-0  lg:h-[30vw] ">
            <div className="lg:w-10/12 w-11/12 flex flex-wrap md:flex-nowrap items-center gap-5 h-full  mx-auto  justify-center">
                <div className="w-full hidden md:block  h-72 lg:h-full  md:w-5/12 bg-cover bg-[url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80)] ">

                </div>
                <di className="w-full py-20 md:p-0  ">
                    <h4 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem] uppercase text-center md:text-left py-2 lg:p-0 lg:mb-4`} >Objectif</h4>
                    <ul className="lg:py-5">
                        <li className="flex gap-3 my-3 ">
                            <span className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </span>
                            <span>
                                Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                                impact sur l'environnement.
                            </span>
                        </li>
                        <li className="flex gap-3 my-3">
                            <span className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </span>
                            <span>
                                Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                                impact sur l'environnement.
                            </span>
                        </li>
                    </ul>
                </di>
            </div>


        </section>
        <section className="py-20  lg:w-10/12 w-11/12 flex items-center flex-col mx-auto  justify-center">
            <h5 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4 uppercase`}  >Pour Quoi participer </h5>

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