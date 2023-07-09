import Speaker from "../Speaker";
const SectionSpeaker = () => {

    return <>
        <div className="bg-black  mx-auto h-fit py-20 text-white ">
           <div className="w-11/12 mx-auto "> 
           <div className="text-green-400 uppercase text-center">
            Tdev fest Speekers
            </div>
            <h3 className="text-5xl uppercase text-center">Intervenants</h3>

            <div className="flex flex-wrap gap-5 items-center justify-center my-5">
                <Speaker/>
                <Speaker/>
                <Speaker/>
                <Speaker/>
            </div>
           </div>

        </div>
    </>
}

export default SectionSpeaker ; 