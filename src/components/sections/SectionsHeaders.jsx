import { Date } from "../Date"
import { FillButton,OutlineButton } from "../Button"
import TimeCard from "../TimeCard"
import Logo from '/public/images/tdev.png'

export const Sectionheader = () => { 
    return <>
         <header className='pt-30 lg:p-0 bg-black flex items-center   text-white h-screen relative overflow-hidden'>
        <div className='w-11/12 md:w-10/12 mx-auto  h-full justify-evenly md:justify-normal items-center z-10 flex flex-wrap lg:flex-nowrap'>
          <div className="h-4/6 md:h-fit flex flex-col justify-end">
            <Date/>
            <h1 className='text-7xl md:text-[6rem] lg:text-[7rem] py-2 lg:p-0 mb-4'>
              TDEV FESTIVAL <span className='bg-gradient-text bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-300'>2023</span>
            </h1>
            <p className='text-lg py-2 lg:p-0 lg:w-9/12 md:mb-14'>
              Découvrez le TDEV Festival, l'événement incontournable qui explore la synergie entre la transformation numérique et le développement durable, pour un avenir innovant et écologiquement responsable
            </p>
            <div className='flex justify-start items-center py-3 '>
              <FillButton title="Incription "/>
              <OutlineButton title="Apprendre plus " />
          
            </div>
        
          </div>
          <div className='  flex lg:flex-wrap lg:translate-y-10 md:w-fit md:h-fit gap-2 h-2/6 w-full  lg:gap-10 '>
            <TimeCard first={true} time={40} title={"Jours"}/>
            <TimeCard  time={40} title={"Jours"}/>
            <TimeCard time={40} title={"Jours"}/>
            <TimeCard  time={40} title={"Jours"}/>
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
            <span>
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