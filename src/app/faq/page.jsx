import Questions from "@/components/Questions";
import SectionContact from "@/components/sections/SectionContact";
import { Anton } from "next/font/google";
import Navbar from "@/components/Navbar";
const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const Faq = () => {
    const faqItems = [
        { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
        { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
        { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus.", isOpen: false },
    ];
    return <>
      <Navbar black={true}/>
    <div className=" w-11/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center relative">
         <div className="text-green-400 font-bold uppercase text-center">
            FAQ
            </div>
        <h1 className={`  ${anton.className}  text-7xl lg:text-8xl uppercase text-center`}>Foire aux Questions</h1>
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

