import { Anton } from "next/font/google"
const anton = Anton({ subsets: ['latin'], weight: ['400'] })

const Heading = ({ children }) => {
    return <span className={` ${anton.className} text-7xl lg:text-[6.5rem] uppercase`}>
        {children}
        </span>
}
export default Heading;