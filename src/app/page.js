
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Logo from '/public/images/tdev.png'
import TimeCard from '@/components/TimeCard'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionSpeaker from '@/components/sections/SectionSpeaker'
import SectionContact from '@/components/sections/SectionContact'
import SectionPartener from '@/components/sections/SectionPartener'
import SectionSponsor from '@/components/sections/SectionSponsor'
export default function Home() {
  return <>
      <header className='pt-30 lg:p-0 bg-black flex items-center   text-white h-screen relative overflow-hidden'>
        <div className='w-10/12 mx-auto h-full items-center z-10 flex flex-wrap lg:flex-nowrap'>
          <div>
            <h1 className='text-7xl py-2 lg:p-0'>
              TDEV FESTIVAL <span className='bg-gradient-text bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-300'>2023</span>
            </h1>
            <p className='text-lg py-2 lg:p-0 lg:w-8/12'>
              Découvrez le TDEV Festival, l'événement incontournable qui explore la synergie entre la transformation numérique et le développement durable, pour un avenir innovant et écologiquement responsable
            </p>
            <div className='flex justify-start items-center py-3 '>
              <a className='btn btn-primary'>Inscription </a>
              <a className='btn'> Apprendre plus </a>
            </div>
        
          </div>
          <div className=' flex lg:flex-wrap w-fit gap-2 lg:gap-10'>
            <TimeCard first={true} time={40} title={"Jours"}/>
            <TimeCard  time={40} title={"Jours"}/>
            <TimeCard time={40} title={"Jours"}/>
            <TimeCard  time={40} title={"Jours"}/>
          </div>
          <div>

          </div>
        </div>
        <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-60 w-60 -right-10  blur-2xl  absolute rotate-90 -bottom-20`}>
         
        </div>
        <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-[50rem] w-[50rem]  -left-[27rem] -rotate-12 blur-[103.5px] opacity-40 absolute top-10`}>
         
        </div>
        <div className='w-fit  flex  mx-auto absolute bottom-0 left-0 right-0'>
          <div className='flex flex-col items-center my-2 animate-bounce'>
            <span>
              Slide down
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>

          </div>
        </div>
      </header>
      <SectionAbout/>
      <SectionSpeaker/>
      <SectionPartener/>
      <SectionSponsor/>

      <SectionContact/>

  
  </>

}
