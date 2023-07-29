import Image from "next/image";
import { FillButton, OutlineButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionAbout = () => {
    return <div id="about" className="w-11/12 h-fit lg:h-screen md:w-10/12 lg:gap-10  mx-auto flex flex-wrap lg:flex-nowrap items-center ">
            <div className="flex flex-row w-full lg:w-3/6 gap-5  h-52 my-10 lg:h-4/6  ">
                <div className="flex flex-col gap-5 w-3/6 items-end">
                    <div    data-aos="zoom-out-up" data-aos-delay="" className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)] w-5/6 h-3/6 ">
                    </div>
                    <div   data-aos="zoom-out-up" data-aos-delay="100" className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] w-4/6  h-3/6 ">
                    </div>
                </div>
                <div   data-aos="zoom-out-up" data-aos-delay="200" className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80)] w-3/6 h-full ">
                </div>
            </div>
            <div className="text-center lg:text-left  lg:h-4/6 w-full lg:w-3/6 pt-16">
                <h2 className=" lg:text-left">
                        <Heading >
                            A propos
                        </Heading>
                </h2>
                <p   data-aos="fade-up" data-aos-delay="200"  className="text-justify my-3">
                    Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, "Transformation numérique : alliée du développement durable", explore les nombreuses façons dont la révolution numérique peut contribuer à un avenir plus durable. Nous vous invitons à rejoindre cette initiative inspirante et à découvrir comment le numérique peut être un moteur essentiel du progrès écologique et social.
                </p>
                <div className='flex justify-center items-center lg:justify-start py-3 '>
                    <FillButton title="Incription " />
                    <OutlineButton href="/about" title="Apprendre plus " />
                </div>
            </div>

        </div>
    
}


export default SectionAbout;