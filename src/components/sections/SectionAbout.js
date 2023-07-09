import Image from "next/image";
const SectionAbout = () => {
    return <>
        <div className="w-11/12 h-fit my-20 mx-auto flex flex-wrap items-center ">
            <div className="flex flex-row w-full gap-5 border-2 h-52 my-10">
                <div className="flex flex-col gap-5 w-3/6">
                    <div className="bg-red-500 w-full h-3/6 ">

                    </div>
                    <div className="bg-green-500 w-full h-3/6 ">

                    </div>
                </div>
                <div className="bg-blue-500 w-3/6 h-full ">

                </div>
            </div>
            <div className="text-center">
                <h2 className="text-7xl">A propos</h2>
                <p className="text-justify">
                    Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, "Transformation numérique : alliée du développement durable", explore les nombreuses façons dont la révolution numérique peut contribuer à un avenir plus durable. Nous vous invitons à rejoindre cette initiative inspirante et à découvrir comment le numérique peut être un moteur essentiel du progrès écologique et social.
                    Bienvenue sur le site du TDEV Festival, un événement passionnant mettant en lumière la synergie entre la transformation numérique et le développement durable. Notre thème central, "Transformation numérique : alliée du développement durable", explore les nombreuses  numérique peut être un moteur essentiel du progrès écologique et social.
                </p>
                <div className='flex justify-center items-center py-3 '>
                    <a className='btn btn-primary'>Inscription </a>
                    <a className='btn'> Apprendre plus </a>
                </div>
            </div>

        </div>
    </>
}


export default SectionAbout;