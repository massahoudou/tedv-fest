"use client"
import { FillButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Objects from "@/data/Objects";
import Why from "@/data/why";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import { Pagination } from 'swiper/modules';

const About = () => {
    return <>
        <Navbar />

        <header className="bg-dark overflow-hidden text-white lg:h-[40rem]  relative ">
            <div className="flex flex-wrap   lg:flex-nowrap lg:w-10/12 w-11/12 mx-auto md:gap-8  py-20 lg:h-full items-center relative z-20 ">
                <div className=" w-full h-fit pt-10 md:p-0   lg:w-4/12">
                    <Heading>
                        <h1 className=" py-2 lg:p-0 md:mb-4 md:text-left text-white">
                            À propos
                        </h1>
                    </Heading>
                </div>
                <div className="  w-full lg:w-8/12 text-xl pt-10  md:py-0 ">
                    <Heading>
                        <div className=" text-transparent uppercase  mb-10 text-2xl  md:text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-300" data-aos="fade-up" data-aos-delay="200">
                            DATE : 25 et 26 Août 2023
                        </div>
                    </Heading>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="md:text-4xl font-semibold">
                            La transformation numérique : alliée du développement durable.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/logo.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[60px] scale-125  absolute top-20  -left-24`}>

            </div>
        </header>
        <section className="py-20 lg:my-10  md:py-10 lg:py-0  lg:h-[30vw] lg:w-10/12 w-11/12 flex md:items-center  flex-col mx-auto justify-start md:justify-center">
            <Heading>
                <h3 className=" py-2 lg:p-0 md:mb-4">Qui sommes-nous </h3>
            </Heading>

            <p className=" text-gray-800 w-full lg:w-7/12 text-left  py-3 lg:py-5 mb-3 leading-relaxed  md:text-center" data-aos="fade-up" data-aos-="100">
                TDEV (Togo Developers) est une communauté technologique établie au Togo en octobre 2020. Son objectif est de combler le manque de ressources éducatives dans le domaine de l&apos;informatique pour les jeunes togolais passionnés par la technologie. Et cela par  des programmes de bourses, des sessions de codage, des compétitions, des conférences et des opportunités de mentorat.
                <br />
                TDEV propose aux jeunes âgés de 16 à 35 ans une opportunité de perfectionner leur expertise dans le domaine de la technologie tout en se préparant aux carrières de l&apos;ère digitale. Avec une optique axée sur le partage de notions et la valorisation de diverses compétences, TDEV joue un rôle actif dans le renforcement de l&apos;écosystème technologique du Togo en formant la future génération de professionnels qualifiés et prometteurs pour les défis numériques de demain.
            </p>

            <FillButton title="Contactez-Nous" />
        </section>
        <section className="lg:w-10/12 w-11/12 mx-auto  relative  md:py-0  h-fit ">

            <div className=" flex flex-wrap lg:flex-nowrap items-stretch gap-10 h-full  mx-auto  justify-center">


                <Image
                    className="w-full  lg:w-8/12 lg:h-12/12 object-cover" data-aos="zoom-in-right"
                    src="/images/12.jpg"
                    loading="lazy"
                    width={600}
                    height={600}
                    alt="spo"
                />
                <div className=" my-10   md:p-0  ">
                    <Heading>
                        <h4 className="md:text-left lg:p-0 mb-4">Objectifs</h4>
                    </Heading>
                    <p className="my-5 lg:m-0 " data-aos="fade-up" data-aos-delay="200">
                        <strong>L&apos;objectif</strong> de ce projet est d&apos;explorer comment la transformation numérique peut être
                        utilisée pour promouvoir le développement durable. Plus précisément, nous visons à :
                    </p>
                    <ul className=" py-3 lg:py-8">
                        {Objects.map((o, key) => {
                            return <li key={key} className="flex gap-3 py-3   " data-aos="fade-up" data-aos-delay="100">
                                <span className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className="text-gray-800">
                                    {o.description}
                                </div>
                            </li>
                        })}

                    </ul>
                </div>
            </div>


        </section>
        <section className="py-20  lg:my-20  w-11/12   mx-auto ">
            <Heading>
                <h5 className=" py-2 lg:p-0 md:mb-4  lg:text-center"  >Pourquoi participer </h5>
            </Heading>
            <div className="mt-20"></div>
            <Swiper

                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper py-20 ">
                {Why.map((w, key) => {
                    return <SwiperSlide key={key}  >
                        <Image key={key} loading="lazy" className="object-cover" data-aos="zoom-in-right"
                            src={w.link}
                            width={600}
                            height={600}
                            alt="Tdev fest" />
                    </SwiperSlide>
                })}
            </Swiper>


        </section>

        <SectionContact />

    </>

}

export default About; 