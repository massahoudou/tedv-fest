const Program = ({item }) => {
    return<>
    { item.content.map((i,key) => {
      return  <div key={key} className="flex ">
    <div className=" w-1/6 p-2 py-4 hidden lg:block " data-aos="fade-up">
       <span className="font-bold"> {i.debut}</span> - <span className="font-bold"> {i.fin}</span>
    </div>

    <div className="w-full p-2  relative ">
        <div daa-aos="fade-up" className={` ${key + 1 < item.content.length ?"before:absolute  before:h-full before:border-[1px] before:border-dashed  before:border-primary before:-z-10" : ""} `}>
            <div  data-aos="flip-left" daa-aos-delay={key * 100} className="w-10 h-10 bg-primary absolute -left-3 rounded-full   flex items-center justify-center text-white">
                {key + 1 }
            </div>
        </div>
        <div className="pl-8 lg:pl-12 lg:px-5 mb-5 lg:mb-10 ">
            <div  className="font-bold pb-2  lg:hidden " data-aos="fade-up" >    {i.debut} -  {i.fin}</div>
            <div className="uppercase font-extrabold text-2xl" data-aos="fade-up" daa-aos-delay={key * 50}> {i.title}</div>
            <div className="text-gray-800   " data-aos="fade-up" daa-aos-delay={key * 100}>{i.description}</div>
        </div>
    </div>

</div>
    })}</>}


export default Program ;