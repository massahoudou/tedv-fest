import Image from "next/image";
const SectionContact = () => {
    return <>
        <div className="relative h-fit py-20 bg-black text-white text-lg  ">
            <div className="w-11/12 mx-auto ">
                <div className="border-b-[1px] border-white pb-10">
                    <h6 className="text-7xl my-10 text-center ">
                        Contact
                    </h6>
                    <div className="text-center">
                        <div>
                            <div>
                                <span> tdev228info@gmail.com</span>
                            </div>
                            <div>
                                <span>Tél: (00228) 96 21 42 35 / 98 16 25 72</span>
                            </div>
                        </div>
                        <div>
                            <span>Nos reseaux Sociaux</span>
                        </div>
                    </div>
                </div>
                <div className=" flex text-md h-20  justify-between items-center ">
                    © 2021 Copyright tdev.com
                    <Image
                        src="/images/tdev.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />

                </div>

            </div>
        </div>
    </>
}
export default SectionContact;