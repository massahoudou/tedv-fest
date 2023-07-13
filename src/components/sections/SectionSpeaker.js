import Speaker from "../Speaker";
import Speakers  from "@/data/Speakers";
const SectionSpeaker = () => {

    return <>
        <div className="bg-black  mx-auto h-fit py-20 text-white ">
           <div className="w-11/12 mx-auto "> 
           <div className="text-green-400 font-bold uppercase text-center">
            Tdev fest Speekers
            </div>
            <h3 className=" text-7xl lg:text-[8rem] uppercase text-center">Intervenants</h3>

            <div className="flex flex-wrap gap-5 md:mt-10  items-center justify-center lg:justify-arround lg:gap-24 my-5">
                {Speakers.map((speaker) => {
                    return  <Speaker key={speaker.id} speaker={speaker} />
                    
                })}
              
            </div>
           </div>

        </div>
    </>
}

export default SectionSpeaker ; 