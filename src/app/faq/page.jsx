import Questions from "@/components/Questions";
import SectionContact from "@/components/sections/SectionContact";
import { Anton } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Heading from "@/components/Heading";

export const metadata = {
    title: "TDEV Festival - Foire aux Questions",
    description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social."
  }
const Faq = () => {
    const faqItems = [
        {id:1, question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
        {id:2 , question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
        {id:3, question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
    ];

    
    return <>

      <Navbar black={true} />
    <div className=" w-11/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center relative">
         <div className="text-green-400 font-bold uppercase text-center">
            FAQ
            </div>
            <h1  className="text-center">
            <Heading>
           Foire aux Questions
            </Heading>
            </h1>
       
        <div className="mt-20 ">
            <Questions faqItems={faqItems} />
        </div>

<div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain  h-[35rem] w-[35rem] md:opacity-80 opacity-30  blur-[50px]  absolute top-52 -left-96`}>

</div>

    </div>
    <SectionContact/>
    </>

}

export default Faq; 

