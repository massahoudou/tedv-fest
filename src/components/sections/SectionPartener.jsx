import Image from "next/image";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import Parteners from "@/data/Parteners";
const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const SectionPartener = () => {
    return <div id="partener" className="h-fit py-20 w-11/12 md:w-10/12 mx-auto ">
        <h3 className="text-7xl lg:text-[8rem] uppercase text-center">
            <Heading>
                Partenaires
            </Heading>
        </h3>
        <div className="flex flex-wrap gap-10 justify-center items-center py-20 ">
            {Parteners.map((sponsor, key) => {
                return <div  key={key} data-aos="fade-up" data-aos-delay={key * 50}>
                    <Image
                        src={sponsor.logo}
                        width={100}
                        height={100}
                        alt={sponsor.name}
                    />
                </div>
            })}
        </div>
    </div>

}

export default SectionPartener;