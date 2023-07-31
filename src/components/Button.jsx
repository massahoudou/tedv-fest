import Link from "next/link";
export const FillButton = ({ title, href = "#" , target=""}) => {
    return (
        <div data-aos="fade-up" data-aos-delay="200">
            <Link target={target} href={href} passHref className=" btn btn-primary hover:bg-secondary hover:scale-105  duration-100 font-semibold" >
                <span className=" ">{title}</span>
            </Link>
        </div>
    );
};


export const OutlineButton = ({ title, href = "#" ,}) => {

    return (
        <div data-aos="fade-up" data-aos-delay="400">
            <Link href={href} passHref className=" group flex  items-center justify-evenly  btn btn-outline">
                {title}
                <span className="-translate-x-5 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 duration-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>
        </div>

    );
};
