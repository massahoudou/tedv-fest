const TimeCard = ({time,title,first }) => {
    return <>
         <div className={`${first ? 'border-[1.5px] bg-transparent': 'bg-white/30'} w-fit h-fit`}>
              <div className="text-left w-fit h-fit p-5 lg:p-10 ">
              <div className='text-3xl lg:text-7xl font-semibold '>{time}</div>
              <div className="">{title}</div>
              </div>
            </div>
    </>
}
export default TimeCard ;