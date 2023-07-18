import { Anton } from "next/font/google"
const anton = Aton({ subsets: ['latin'],weight: ['400'] })

const Heading = ({Children}) => {
    return <span className={` ${anton.className} text-7xl lg:text-[6.5rem] uppercase`}>{Children}</span>
}