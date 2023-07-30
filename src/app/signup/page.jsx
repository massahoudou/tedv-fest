
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
    <div className="bg-dark h-fit text-white  overflow-hidden w-full relative ">
      <div className={`bg-[url(/images/logo.png)] bg-no-repeat bg-contain h-[50rem] w-[50rem] lg:h-[90rem] lg:w-[90rem] -left-[27rem] lg:-left-[40rem]  blur-[150px] opacity-40 absolute -top-72`}>

      </div>
      <div className="w-11/12 lg:w-6/12 z-20 lg:py-20 lg:pb-10 lg:pt-40 pt-36  mx-auto relative ">
        <Heading>
          <h1 className="text-center text-white lg:text-6xl  ">
            Inscription au Tdev Festival <span className='bg-gradient-text bg-clip-text text-transparent bg-gradient-to-br from-secondary from-20% to-primary to-70% '>2023</span>
          </h1>
        </Heading>
        <p className="my-5 text-center" data-aos="fade-up">
          Pour avoir le programe complet de l&apos;evenment , télécharger la version Pdf n cliquant sur le lien  ci-dessous<br /><br />
          <Link data-aos="fade-up" data-aos-delay="100" href="#" passHref className="text-primary hover:text-secondary duration-100  text-lg uppercase font-semibold"> Téléchargement </Link>
        </p>


      </div>
    </div>

    <HubSpot />

    <SectionContact />
  </div>

}


export default SignUp;

