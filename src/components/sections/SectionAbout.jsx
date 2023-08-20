import Image from "next/image";
import { FillButton, OutlineButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionAbout = () => {
    return <div id="about" className="w-11/12 h-fit lg:h-screen md:w-10/12 lg:gap-10  mx-auto flex flex-wrap lg:flex-nowrap items-center ">
            <div className="flex flex-row-reverse lg:flex-row w-full lg:w-3/6 gap-5  h-72  my-10 lg:h-4/6  ">
                <div className="flex flex-col gap-5 w-3/6 lg:items-end">
                    <div    data-aos="zoom-out-up" data-aos-delay="" className=" w-full md:w-5/6 h-3/6 ">
                        <Image className="w-full h-full object-cover " src="/images/10.JPG" laoding="lazy"width={600} height={600} alt="tdev festival"/>
                    </div>
                    <div   data-aos="zoom-out-up" data-aos-delay="100" className="  w-full md:w-4/6  h-3/6 ">
                    <Image className="w-full h-full object-cover " src="/images/7.jpeg" laoding="lazy"width={600} height={600} alt="tdev festival"/>
                    </div>
                </div>
                <div   data-aos="zoom-out-up" data-aos-delay="200" className="   w-3/6 h-full ">
                <Image className="w-full h-full object-cover " src="/images/16.jpg" laoding="lazy" width={600} height={600} alt="tdev festival"/>
                </div>
                
            </div>
            <div className=" lg:text-left  lg:h-4/6 w-full lg:w-3/6 lg:pt-16">
                <h2 className="">
                        <Heading >
                        À propos
                        </Heading>
                </h2>
                <p   data-aos="fade-up" data-aos-delay="200"  className="text-justify my-3">
                Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, &quot;Transformation numérique : alliée du développement durable&quot;, explore les nombreuses façons dont la révolution numérique peut contribuer à un avenir plus durable. Nous vous invitons à rejoindre cette initiative inspirante et à découvrir comment le numérique peut être un moteur essentiel du progrès écologique et social.
                </p>
                <div className='flex  items-center justify-start py-3 '>
                    <FillButton title="S'inscrire" href="/merci" />
                    <OutlineButton href="/apropos" title="Apprendre plus " />
                </div>
            </div>

        </div>
    
}

export default SectionAbout;