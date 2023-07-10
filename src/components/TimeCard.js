import { Anton } from "next/font/google";

const anton = Anton({subsets: ['latin'] , weight: ['400']})

const TimeCard = ({time,title,first }) => {
    return <>
         <div className={`${first ? 'border-[1.5px] bg-transparent': 'bg-white/20 backdrop-blur-lg' } w-fit h-fit  shadow-2xl rounded-lg`}>
              <div className="text-left w-fit h-fit p-5 lg:p-10 px-6 lg:px-12 ">
              <div className={` ${anton.className} text-5xl lg:text-[6.5rem] font-semibold h-fit `}>{time}</div>
              <div className="">{title}</div>
              </div>
            </div>
    </>
}
export default TimeCard ;