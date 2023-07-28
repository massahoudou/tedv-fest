import { Anton } from "next/font/google";
import { motion } from "framer-motion"
const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const TimeCard = ({time,title,first ,delay }) => {
    return <>
         <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 , delay: delay }}
          className={`${first ? 'border-[1.5px] bg-transparent': 'bg-white/20 backdrop-blur-xl' } w-[8rem] h-[6rem]   lg:min-w-[13rem] lg:min-h-[13rem] flex items-center  justify-center shadow-2xl md:rounded-lg`}>
              <div className="text-left  flex flex-col items-start  justify-start w-fit  ">
              <div className={` ${anton.className} text-5xl lg:text-[6.5rem] font-semibold h-fit font-sans`}>{time}</div>
              <div className="">{title}</div>
              </div>
            </motion.div>
    </>
}
export default TimeCard ;