import Image from "next/image";

const SectionPartener = () => {
    return <>
        <div className="h-fit py-20 w-11/12 md:w-10/12 mx-auto ">
        <h3 className=" text-7xl lg:text-[8rem] uppercase text-center">PARTENAIRES</h3>
            <div className="flex flex-wrap gap-10 justify-center items-center py-20 ">
            <Image
            className=""
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
            </div>
        </div>
    </>
}

export default SectionPartener ;