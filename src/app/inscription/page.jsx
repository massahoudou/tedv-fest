
import SectionContact from "@/components/sections/SectionContact";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Link from "next/link";
import HubSpot from "@/components/HubSpot";

export const metadata = {
  title: "TDEV Festival - Inscription",
  description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social."
}

const SignUp = () => {
  return <div>
    <Navbar />
    <header className="bg-dark overflow-hidden text-white lg:h-[40rem]  relative ">
            <div className="flex flex-wrap   lg:flex-nowrap lg:w-10/12 w-11/12 mx-auto md:gap-8  py-20 lg:h-full items-center relative z-20 ">
                <div className=" w-full h-fit pt-10 md:p-0   lg:w-5/12">
                    <Heading>
                        <h1 className=" py-2 lg:p-0 md:mb-4 md:text-left text-white">
                        Inscription au Tdev Festival <span className='bg-gradient-text bg-clip-text text-transparent bg-gradient-to-br from-secondary from-20% to-primary to-70% '>2023</span>
                        </h1>
                    </Heading>
                </div>
                <div className="  w-full lg:w-7/12 text-xl pt-10  md:py-0 ">
                    <Heading>
                        <div className=" text-transparent uppercase  text-2xl mb-10  md:text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-300" data-aos="fade-up" data-aos-delay="200">
                            DATE : 25 et 26 Août 2023
                        </div>
                    </Heading>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="md:text-4xl font-semibold">
                          La transformation numérique : alliée du développement durable.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[60px] scale-125  absolute top-20  -left-24`}>

            </div>
        </header>

    <HubSpot />

    <SectionContact />
  </div>

}


export default SignUp;

