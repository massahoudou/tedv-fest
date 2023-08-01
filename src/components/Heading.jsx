import { Anton } from "next/font/google";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
/**const nohemi = localFont({
    src: [
      {
        path: './fonts/nohemi//Nohemi-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: '--font-nohemi',
  }); **/

const anton = Anton({ subsets: ['latin'], weight: ['400'] })

const Heading = ({ children }) => {
    return <div    data-aos="fade-up" data-aos-delay="100" className={` ${anton.className} text-dark text-6xl md:text-7xl lg:text-[6.5rem] uppercase`}>
           {children}
        </div>
}
export default Heading;