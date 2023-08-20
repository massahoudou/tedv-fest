
import SectionContact from "@/components/sections/SectionContact";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Link from "next/link";
import HubSpot from "@/components/HubSpot";
import { FillButton } from "@/components/Button";

export const metadata = {
  title: "TDEV Festival - Inscription",
  description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social."
}

const Merci = () => {
  return <div>
    <Navbar />
    <header className="bg-dark overflow-hidden text-white h-screen  relative ">
            <div className="flex flex-wrap   lg:flex-nowrap lg:w-10/12 w-11/12 mx-auto md:gap-8  py-20 lg:h-full items-center relative z-20 ">
                <div className=" w-full h-fit pt-10 md:p-0   lg:w-6/12">
                    <Heading>
                        <h1 className=" py-2 lg:p-0 md:mb-4 md:text-left text-white">
                        Fin des Inscriptions
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
                        <p className="md:text-xl font-medium">
                       
                        Chers passionnés de technologie et d&apos;innovation 
                        Nous tenons à vous informer que les inscriptions pour le TDevFestival 2023 sont désormais fermées. Nous vous remercions infiniment pour l&apos;enthousiasme que vous avez envers notre événement.
<br />
Pour ceux qui n&apos;ont pas pu finaliser leur inscription cette fois-ci, nous devrions avoir l&apos;opportunité de vous accueillir lors de futurs événements. Restez connectés pour ne rien manquer de nos prochaines annonces.

Un grand merci pour votre intérêt continue envers le TDevFestival.

Cordialement, L&apos;équipe organisatrice
                        </p>
                        <div className="mt-10"></div>
                        <div className="text-sm">
                        <FillButton href="mailto:contact@ourtdev.com"  title="Nous Contacter"/>     
                        </div>
                                        
                    </div>
                </div>
            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[60px] scale-125  absolute top-20  -left-24`}>

            </div>
        </header>

  <SectionContact isBlured={false}/>
  </div>

}


export default Merci;

