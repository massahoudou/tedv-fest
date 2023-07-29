import { Anton } from "next/font/google"
const anton = Anton({ subsets: ['latin'], weight: ['400'] })

const SmallHeading = ({ children }) => {
    return <div data-aos="fade-up" data-aos-delay="100" className={` ${anton.className}`}>
        {children}
    </div>
}
export default SmallHeading;