"use cleint"
import { Date } from "../Date"
import React, { useState, useEffect } from "react"
import { FillButton, OutlineButton } from "../Button"
import TimeCard from "../TimeCard"
import Logo from '/public/images/tdev.png'
import { Anton } from 'next/font/google'
import Navbar from "../Navbar"
import { motion } from "framer-motion"


const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
export const Sectionheader = ({ target }) => {

  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new window.Date();
      const targetDate = new window.Date(target);
      const distance = targetDate - now;

      if (distance > 0) {
        const totalSeconds = Math.floor(distance / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setDays(days < 10 ? `0${days}` : days.toString());
        setHours(hours < 10 ? `0${hours}` : hours.toString());
        setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
        setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());
      } else {
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [target]);

  return <>
    <Navbar black={false} />
    <header id="header" className='pt-20 md:p-0 bg-black flex items-center   text-white h-screen relative overflow-hidden'>
      <div className='w-11/12 md:w-10/12 mx-auto  h-full justify-evenly md:justify-normal items-center z-10 flex flex-wrap lg:flex-nowrap'>
        <div className="h-4/6 md:h-4/6 lg:h-fit flex flex-col justify-center lg:justify-start max-xl:justify-center   ">
          <Date />
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
             className={` ${anton.className} text-5xl md:text-8xl lg:text-[7rem]   py-2 lg:p-0 md:mb-4`}>
            TDEV FESTIVAL <span className='bg-gradient-text bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-300'>2023</span>
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: .2}}
          className=' text-normal lg:text-lg  lg:p-0 lg:w-9/12 md:mb-14'>
            Découvrez le TDEV Festival, l'événement incontournable qui explore la synergie entre la transformation numérique et le développement durable, pour un avenir innovant et écologiquement responsable
          </motion.p>
          <div className='flex justify-start items-center  py-2 md:py-3 '>
            <FillButton title="Incription " />
            <OutlineButton title="Apprendre plus " />

          </div>

        </div>
        <div className=' items-start lg:items-baseline flex lg:flex-wrap  md:w-full md:h-full lg:h-fit  gap-2  w-full lg:w-fit  lg:gap-10 '>
          <TimeCard first={true} time={days} title={"Jours"} />
          <TimeCard time={hours} title={"heurs"} />
          <TimeCard time={minutes} title={"Minutes"} />
          <TimeCard time={seconds} title={"Second"} />
        </div>
        <div>

        </div>
      </div>
      <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-[35rem] w-[35rem]  lg:scale-110  right-10  blur-3xl  absolute  `}>

      </div>
      <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-[50rem] w-[50rem] lg:h-[90rem] lg:w-[90rem] -left-[27rem] lg:-left-[40rem]  blur-[150px] opacity-40 absolute -top-72`}>

      </div>
      <div className='w-fit  flex  mx-auto absolute bottom-0 left-0 right-0'>
        <div className='flex flex-col items-center my-2 animate-bounce'>
          <span className="hidden lg:block">
            Slide down
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>

        </div>
      </div>
    </header>
  </>



}