"use client"
import Image from "next/image";
import { FillButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import { useEffect, useState } from "react";
import Program from "../Program";

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const SectionProgram = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Première jour",
            date: "25 AOUT 2023",
            active: true,
            content: [
                {
                    debut: "9H-00",
                    fin: "10H-00",
                    title: "title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purusorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus",
                    active: true,
                },
                {
                    debut: "9H-00",
                    fin: "10H-00",
                    title: "title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purusorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus",
                    active: true,
                },
                {
                    debut: "9H-00",
                    fin: "10H-00",
                    title: "title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purusorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus",
                    active: true,
                },

                {
                    debut: "9H-00",
                    fin: "10H-00",
                    title: "title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purusorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus",
                    active: true,
                },

            ],
        },
        {
            id: 2,
            title: "deuxieme jour",
            date: "26 AOUT 2023",
            active: false,
            content: [
                {
                    debut: "9H-00",
                    fin: "10H-00",
                    title: "title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus",
                    active: true,
                },

            ],
        },

    ]);
    const handleClick = (item) => {
        const updatedItems = items.map((i) => {

            if (i.id === item.id) {
                return { ...i, active: !i.active };
            }
            i.active = false;
            return i;
        });
        console.log("hello");
        setItems(updatedItems);
    };


    return <div id="program" className="h-fit  py-20 w-11/12 md:w-10/12  mx-auto ">
        <h5 className="text-7xl lg:text-[8rem] uppercase text-center">
            <Heading>
                Programmes
            </Heading>
        </h5>
        <div v data-aos="fade-up" daa-aos-delay="200" className=" hidden py-3 lg:py-6 px-10  lg:flex-row flex-col   mt-5 md:mt-10  justify-between bg-cover bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-black/30  bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)]">
            <div className="uppercase text-xl lg:text-3xl lg:w-3/6 w-full text-center lg:text-left text-white font-black z-20  ">
                vous pouvez télécharger la version  numerique du  programme ?
            </div>
            <div className="lg:w-3/6 flex justify-center z-20">
                <FillButton title="Cliquer ici!" />
            </div>
        </div>

        <div className="py-10 w-11/12   lg:w-10/12 mx-auto lg:mt-10">
            <div className="  w-fit p-1 bg-gray-100 mx-auto flex items-center justify-center "  data-aos="flip-left" daa-aos-delay="100">
                {items.map((item, key) => {
                    return <button  onClick={() => handleClick(item)} key={key} className={` ${item.active ? " btn-primary text-white shadow-lg" : ""} btn py-2 m-0  `}>
                        <span className="uppercase text-xs md:text-sm block ">{item.title}</span>
                        <span className="font-bold text-xs md:text-sm  ">{item.date} </span>
                    </button>
                })}


            </div>

            <div className="mt-10 ">
                <div className="">
                    {items.map((item, index) => item.active  ? <Program item={item} key={index}/> : "" )}
                </div>

            </div>

        </div>
    </div>

}

export default SectionProgram;