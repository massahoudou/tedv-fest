import Image from "next/image";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import Sponsors from "@/data/Sponsors";

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const SectionSponsor = () => {
    return <div id="sponsor" className="h-fit md:py-32 w-11/12 md:w-10/12 mx-auto ">
        <h3 className="text-center">
            
            <Heading>
                Sponsors
            </Heading>
        </h3>
        <div className="flex flex-wrap gap-10 justify-center items-center py-20 ">
        {Sponsors.map((sponsor) => {
                return <Image
                src={sponsor.logo}
                width={100}
                height={100}
                alt={sponsor.name}
            />
            })}
          
        </div>
    </div>
}

export default SectionSponsor;