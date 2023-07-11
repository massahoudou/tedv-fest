import { Anton } from "next/font/google";

const anton = Anton({subsets: ['latin'] , weight: ['400']})

const TimeCard = ({time,title,first }) => {
    return <>
         <div className={`${first ? 'border-[1.5px] bg-transparent': 'bg-white/20 backdrop-blur-xl' } w-fit h-fit lg:min-w-[13rem] lg:min-h-[13rem] flex items-center  justify-center shadow-2xl rounded-lg`}>
              <div className="text-left  flex flex-col items-start  justify-start w-fit ">
              <div className={` ${anton.className} text-5xl lg:text-[6.5rem] font-semibold h-fit font-sans`}>{time}</div>
              <div className="">{title}</div>
              </div>
            </div>
    </>
}
export default TimeCard ;