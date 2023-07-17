import { FillButton } from "@/components/Button";
import Navbar from "@/components/Navbar";
import SectionContact from "@/components/sections/SectionContact";
import { Anton } from 'next/font/google'



const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const About = () => {

    return <>

        <Navbar />
        <header className="bg-black text-white h-[40rem]  relative ">
            <div className="flex flex-row w-10/12 lg:w-11/12 mx-auto  h-full items-center ">
                <div className="w-4/12">
                    <h1 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4 uppercase`}>
                        A propos
                    </h1>
                </div>               
                 <div className="w-8/12 text-xl">
                    <div>
                        DATE : 25 et 26 Août 2023
                    </div>
                    <div>
                        <h2 className="underline ">Theme</h2>
                        <p>
                            « Transformation numérique : alliée du développement durable »
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[50px]  absolute top-52 -left-96`}>

            </div>
        </header>
        <section className="h-[30vw] lg:w-10/12 w-11/12 flex items-center flex-col mx-auto  justify-center">
            <h3 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4`}>Qui somme nous </h3>
            <p className=" w-full md:w-7/12 text-center lg:py-5 ">
                Lorem ipsum dolor sit amet consectetur. Interdum molestie nulla dictumst commodo massa id amet odio magna. Tristique feugiat tempus elementum aliquet ultrices auctor sed et. Dapibus lacus ut at scelerisque turpis. Risus lectus id at in vel elit et arcu.
            </p>
            <FillButton title="Contacter-Nous" />
        </section>
        <section className="bg-black text-white h-[30vw] ">
            <div className="lg:w-10/12 w-11/12 flex items-center gap-5 h-full  mx-auto  justify-center">
                <div className=" md:w-5/12 bg-red-300 h-full">

                </div>
                <di className="w-full ">
                    <h4 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem] uppercase  py-2 lg:p-0 md:mb-4`} >Objectif</h4>
                    <ul>
                        <li>Examiner les tendances actuelles de la transformation numérique et leur impact sur l'environnement. Examiner les tendances actuelles de la transformation numérique et leur
                            impact sur l'environnement.</li>
                    </ul>
                </di>
            </div>


        </section>
        <section className="h-[35vw] lg:w-10/12 w-11/12 flex items-center flex-col mx-auto  justify-center">
            <h5 className={` ${anton.className} text-5xl md:text-[6rem] lg:text-[7rem]  py-2 lg:p-0 md:mb-4 uppercase`}  >Pour Quoi participer </h5>

            <div className="flex pt-20 gap-3 ">
                <div className="md:w-3/12 w-full lg:w-4/12  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoir pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
                <div className="md:w-3/12 w-full lg:w-4/12  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoir pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
                <div className="md:w-3/12 w-full lg:w-4/12  ">
                    <div className="text-xl text-primary uppercase font-bold">Pour quoir pariciper</div>
                    <p className="text-gray-800 py-2">
                        Lorem ipsum dolor sit amet consectetur. Arcu consectetur in tortor felis aliquam sit eget elit senectus. Vitae sed semper purus imperdiet. Congue lorem tellus phasellus hendrerit scelerisque. Tellus velit nulla
                    </p>
                </div>
            </div>
        </section>
        <SectionContact />

    </>

}

export default About; 