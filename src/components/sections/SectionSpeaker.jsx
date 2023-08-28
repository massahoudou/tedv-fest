import Speaker from "../Speaker";
import Speakers from "@/data/Speakers";
import Heading from "../Heading";

const SectionSpeaker = () => {

    return <div id="speakers" className="bg-dark mx-auto h-fit py-20 text-white " data-aos="fade-up">
        <div className="w-11/12 mx-auto ">
            <div   data-aos="fade" data-aos-delay="" className="text-green-400 font-bold uppercase text-center">
                Tdev fest Speekers
            </div>
           
                <Heading>
                <h3 className="text-center text-white">
                    Intervenants
                    </h3>
                </Heading>
          

            <div className="flex flex-wrap gap-5 md:mt-10  items-center justify-center lg:justify-arround lg:gap-24 my-5">
                {Speakers.map((speaker) => {
                    return <Speaker key={speaker.id} speaker={speaker}  />

                })}

            </div>
        </div>

    </div>
}

export default SectionSpeaker; 