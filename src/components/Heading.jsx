import { Anton } from "next/font/google"
const anton = Anton({ subsets: ['latin'], weight: ['400'] })

const Heading = ({ children }) => {
    return <div    data-aos="fade-up" data-aos-delay="100" className={` ${anton.className} text-7xl lg:text-[6.5rem] uppercase`}>
        {children}
        </div>
}
export default Heading;