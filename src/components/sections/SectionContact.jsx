import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'] , weight: ['400'] , variable: "--font-anton"})
const SectionContact = () => {
    return <section id="contact" className="relative h-fit py-20 bg-black text-white text-lg overflow-hidden ">

            <div className="w-11/12 mx-auto relative z-20 ">
                <div className="border-b-[1px] border-white/30 pb-14 ">
                    <h6 className={`  ${anton.className}  text-7xl lg:text-[8rem] uppercase text-left`}>Contact</h6>
                    <div className="text-center flex  flex-wrap md:flex-nowrap justify-between mt-10">
                        <div className=" flex gap-5 pl-2 flex-col">
                            <div className="flex gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <span> tdev228info@gmail.com</span>
                            </div>
                            <div className="flex gap-5 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <span>Tél: (00228) 96 21 42 35 / 98 16 25 72</span>
                            </div>
                        </div>
                        <div className="md:mt-0 mt-10">
                            <span>Nos reseaux Sociaux</span>
                            <div>
                                <span>
                                    <Link href="#" passHref>

                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-md h-20  justify-between items-center ">
                    © 2021 Copyright tdev.com
                    <Image
                        src="/images/tdev.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />

                </div>

            </div>
            <div className={`bg-[url(/images/tdev.png)]  bg-no-repeat bg-contain h-[35rem] w-[35rem]  right-10  blur-3xl  absolute -top-2 opacity-30 `}>

            </div>
            <div className={`bg-[url(/images/tdev.png)] bg-no-repeat bg-contain h-[50rem] w-[50rem] lg:h-[90rem] lg:w-[90rem] -left-[27rem] lg:-left-[40rem]  blur-[150px] opacity-30 absolute -top-72`}>

            </div>
        </section>
    
}
export default SectionContact;