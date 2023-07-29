import Image from "next/image";
import { FillButton, OutlineButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionAbout = () => {
    return <div id="about" className="w-11/12 h-fit lg:h-screen md:w-10/12 lg:gap-10  mx-auto flex flex-wrap lg:flex-nowrap items-center ">
            <div className="flex flex-row-reverse lg:flex-row w-full lg:w-3/6 gap-5  h-72  my-10 lg:h-4/6  ">
                <div className="flex flex-col gap-5 w-3/6 lg:items-end">
                    <div    data-aos="zoom-out-up" data-aos-delay="" className="bg-cover bg-right-top bg-[url(/images/3.jpg)] w-5/6 h-3/6 ">
                    </div>
                    <div   data-aos="zoom-out-up" data-aos-delay="100" className="bg-cover bg-right-top bg-[url(/images/1.jpg)] w-4/6  h-3/6 ">
                    </div>
                </div>
                <div   data-aos="zoom-out-up" data-aos-delay="200" className=" bg-cover bg-center bg-[url(/images/5.jpg)] w-3/6 h-full ">
                </div>
                
                
            </div>
            <div className=" lg:text-left  lg:h-4/6 w-full lg:w-3/6 lg:pt-16">
                <h2 className="">
                        <Heading >
                            A propos
                        </Heading>
                </h2>
                <p   data-aos="fade-up" data-aos-delay="200"  className="text-justify my-3">
                    Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, "Transformation numérique : alliée du développement durable", explore les nombreuses façons dont la révolution numérique peut contribuer à un avenir plus durable. Nous vous invitons à rejoindre cette initiative inspirante et à découvrir comment le numérique peut être un moteur essentiel du progrès écologique et social.
                </p>
                <div className='flex  items-center justify-start py-3 '>
                    <FillButton title="Incription " />
                    <OutlineButton href="/about" title="Apprendre plus " />
                </div>
            </div>

        </div>
    
}

export default SectionAbout;