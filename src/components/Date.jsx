import { motion } from "framer-motion"
import Link from "next/link"
export const Date = () => {
    return <>
   <div className="flex  h-fit  md:flex-nowrap flex-wrap items-center md:gap-5 ">
   <div
           data-aos="fade-up" data-aos-delay=""
         className="rounded-full  bg-gradient-to-l to-red-500 to-30% from-pink-600 w-fit flex gap-1 md:gap-3 p-1 md:p-2 text-sm mb-2 items-center sm:font-semibold">
            <motion.span >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </motion.span>
            <span className="uppercase text-sm  sm:text-md p-2 ">
                25 au 26 Août 2023 p-2 
            </span>
        </div>
        <div  data-aos="fade-up" data-aos-delay=""  className="uppercase text-sm  sm:text-md font-medium ">
        VENUE : <Link  target="_blank" passHref href="https://goo.gl/maps/GKMNterS8hLG7Y8g6 " className="text-primary animate-pulse"> ENERGY GENERATION  </Link>
        </div>
   </div>
    </>
}