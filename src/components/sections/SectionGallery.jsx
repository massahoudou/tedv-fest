import Image from "next/image";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import { FillButton } from "../Button";
import Gallery from "@/data/Gallery";
const SectionGallery = () => {
    return <div id="gallery" className="h-fit py-20 w-11/12 md:w-10/12 mx-auto ">
        <h3 className="text-center">
            <Heading>
                Gallery
            </Heading>
        </h3>
        <div className="flex flex-wrap gap-10 justify-center items-center py-20 ">
                {Gallery.map((g,key) => {
                    return <Image key={key} 
                    loading="lazy"
                        className="  lg:w-2/12 h-full object-cover" data-aos="zoom-in-right"
                       src={g.url}
                       width={300}
                       height={300}
                       alt={g.name}
                   />
                })}
           
            
        </div>

        <div className="flex  justify-center">
            <FillButton title="Voir plus "/>
        </div>
    </div>

}

export default SectionGallery;