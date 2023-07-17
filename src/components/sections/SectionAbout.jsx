import Image from "next/image";
import { FillButton, OutlineButton } from "../Button";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionAbout = () => {
    return <div id="about" className="w-11/12 h-fit lg:h-screen md:w-10/12 lg:gap-10  mx-auto flex flex-wrap lg:flex-nowrap items-center ">
            <div className="flex flex-row w-full lg:w-3/6 gap-5  h-52 my-10 lg:h-4/6  ">
                <div className="flex flex-col gap-5 w-3/6 items-end">
                    <div className="bg-red-500 w-5/6 h-3/6 ">
                    </div>
                    <div className="bg-green-500 w-4/6  h-3/6 ">
                    </div>
                </div>
                <div className="bg-blue-500 w-3/6 h-full ">
                </div>
            </div>
            <div className="text-center lg:text-left w-full lg:w-3/6 pt-16">
                <h2 className={`  ${anton.className}  text-7xl lg:text-[8rem] uppercase lg:text-left`}>A propos</h2>
                <p className="text-justify my-3">
                    Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, "Transformation numérique : alliée du développement durable", explore les nombreuses façons dont la révolution numérique peut contribuer à un avenir plus durable. Nous vous invitons à rejoindre cette initiative inspirante et à découvrir comment le numérique peut être un moteur essentiel du progrès écologique et social.
                </p>
                <div className='flex justify-center items-center lg:justify-start py-3 '>
                    <FillButton title="Incription " />
                    <OutlineButton title="Apprendre plus " />
                </div>
            </div>

        </div>
    
}


export default SectionAbout;