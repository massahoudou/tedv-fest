import Image from "next/image";
import { FillButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const SectionProgram = () => {
    return <div id="program" className="h-fit md:h-screen py-20 w-11/12 md:w-10/12  mx-auto ">
        <h5 className="text-7xl lg:text-[8rem] uppercase text-center">
            <Heading>
                Programmes
            </Heading>
        </h5>
        <div className="py-3 lg:py-6 px-10 flex lg:flex-row flex-col   mt-5 md:mt-10  justify-between bg-cover bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-black/30  bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)]">
            <div className="uppercase text-xl lg:text-3xl lg:w-3/6 w-full text-center lg:text-left text-white font-black z-20  ">
                vous pouvez télécharger la version  numerique du  programme ?
            </div>
            <div className="lg:w-3/6 flex justify-center z-20">
                <FillButton title="Cliquer ici!" />
            </div>
        </div>

        <div className="py-10 ">
            <div className="w-fit p-2 bg-gray-200 mx-auto flex ">
                <button className="bg-primary flex flex-col py-2 px-10 text-white shadow-lg">
                    <span className="uppercase text-sm">Premier Jour</span>
                    <span className="font-bold ">25 AOUT 2023 </span>
                </button>
                <button className=" flex flex-col py-2 px-10 ">
                    <span className="uppercase text-sm">Premier Jour</span>
                    <span className="font-bold">25 AOUT 2023 </span>
                </button>
            </div>

            <div>
                <div className="flex">
                    <div className="font-bold w-1/6 p-2 ">
                        09h:00 - 11h00
                    </div>

                    <div className="w-full p-2  relative ">
                        <div className="before:absolute before:h-full before:border-[1px] before:border-dashed  before:border-primary before:-z-10">

                        </div>
                        <div className="px-5 pb-10 ">
                            <div className="uppercase font-extrabold text-2xl">Titre programme</div>
                            <div>Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu</div>

                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="font-bold w-1/6 p-2 ">
                        09h:00 - 11h00
                    </div>

                    <div className="w-full p-2  relative ">
                        <div className="before:absolute before:h-full before:border-[1px] before:border-dashed  before:border-primary before:-z-10">

                        </div>
                        <div className="px-5  pb-10">
                            <div className="uppercase font-extrabold text-2xl">Titre programme</div>
                            <div>Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu</div>

                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="font-bold w-1/6 p-2 ">
                        09h:00 - 11h00
                    </div>

                    <div className="w-full p-2  relative ">
                        <div className="before:absolute before:h-full before:border-[1px] before:border-dashed  before:border-primary before:-z-10">

                        </div>
                        <div className="px-5 pb-10 ">
                            <div className="uppercase font-extrabold text-2xl">Titre programme</div>
                            <div>Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default SectionProgram;