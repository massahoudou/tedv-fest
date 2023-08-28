import Image from "next/image";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import { FillButton } from "../Button";
import Gallery from "@/data/Gallery";
const SectionGallery = () => {
    return <div id="galleries" className="h-fit py-20 w-11/12 md:w-10/12 mx-auto ">
        <h3 className="text-center">
            <Heading>
                Galerie
            </Heading>
        </h3>
        <div className="flex flex-wrap gap-10 justify-center items-center py-20 ">
                {Gallery.map((g,key) => {
                    return <Image key={key} 
                    loading="lazy"
                        className="  lg:w-2/12 h-full object-cover" data-aos="zoom-in-right" data-aos-delay={key * 100 }
                       src={g.url}
                       width={500}
                       height={500}
                       alt={g.name}
                   />
                })}
           
            
        </div>

       
    </div>

}

export default SectionGallery;