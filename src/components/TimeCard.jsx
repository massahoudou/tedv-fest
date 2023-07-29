import { Anton } from "next/font/google";
import { motion } from "framer-motion"
const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const TimeCard = ({time,title,first ,delay , translate}) => {
    return <>
         <div   data-aos="zoom-out-up" data-aos-delay={delay} data-aos-anchor-placement="top-bottom"
          className={`${first ? ' md:border-[1.5px] md:bg-transparent': 'md:bg-white/20 md:backdrop-blur-xl' } ${translate ? "lg:translate-y-5" :""}  sm:w-[8rem] h-[8rem]   bg-none   lg:min-w-[13rem] lg:min-h-[13rem] flex items-center  justify-center md:shadow-2xl md:rounded-lg`}>
              <div className="text-left  flex flex-col items-start  justify-start w-fit  ">
              <div className={` ${anton.className} text-5xl lg:text-[6.5rem] font-semibold h-fit font-sans`}>{time}</div>
              <div className="text-sm sm:text-md">{title}</div>
              </div>
            </div>
    </>
}
export default TimeCard ;