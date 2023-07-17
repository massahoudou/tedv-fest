import Image from "next/image";
import { FillButton } from "../Button";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionProgram = () => {
    return <div id="program" className="h-fit md:h-screen py-20 w-11/12 md:w-10/12  mx-auto ">
            <h5 className={`  ${anton.className}  text-7xl lg:text-[8rem] uppercase text-center`}>Prgrammes</h5>
            <div className="py-3 lg:py-6 px-10 flex lg:flex-row flex-col   mt-5 md:mt-10  justify-between bg-cover bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-black/30  bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)]">
                <div className="uppercase text-xl lg:text-3xl lg:w-3/6 w-full text-center lg:text-left text-white font-black z-20  ">
                    vous pouvez télécharger la version  numerique du  programme ?
                </div>
                <div className="lg:w-3/6 flex justify-center z-20">
                    <FillButton title="Cliquer ici!" />
                </div>
            </div>

            <div>
                <div>

                </div>
            </div>
        </div>

}

export default SectionProgram;