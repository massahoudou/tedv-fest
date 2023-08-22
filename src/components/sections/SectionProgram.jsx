"use client"
import Image from "next/image";
import { FillButton } from "../Button";
import { Anton } from "next/font/google";
import Heading from "../Heading";
import { useEffect, useState } from "react";
import Link from "next/link";
import Program from "../Program";

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
const SectionProgram = () => {
    const [items, setItems] = useState([
        {
            "id": 1,
            "title": "Premier jour",
            "date": "25 AOUT 2023",
            "active": true,
            "content": [
                {
                    "debut": "08:00",
                    "fin": "09:30",
                    "title": "Accueil",
                    "description": "Enregistrement des participants et petit déjeuner",
                    "active": false
                },
                {
                    "debut": "09:30",
                    "fin": "09:40",
                    "title": "Discours",
                    "description": "Discours du Président de TDEV",
                    "active": false
                },
                {
                    "debut": "09:40",
                    "fin": "10:00",
                    "title": "Photo de famille",
                    "description": "",
                    "active": false
                },
                {
                    "debut": "10:00",
                    "fin": "11:00",
                    "title": "Panel 1",
                    "description": "Numérique et qualité de vie : innovations pour un avenir durable",
                    "active": false
                },
                {
                    "debut": "11:05",
                    "fin": "11:25",
                    "title": "Keynote 1",
                    "description": "L'Art et la Science de l'UI/UX: Une décennie de Transformation Numérique",
                    "active": false
                },
                {
                    "debut": "11:30",
                    "fin": "12:30",
                    "title": "Panel 2",
                    "description": "Comment débuter une carrière dans le domaine de la technologie : Conseils, opportunités et ressources",
                    "active": false
                },
                {
                    "debut": "12:30",
                    "fin": "12:40",
                    "title": "Lancement",
                    "description": "Lancement du réseautage Github et du #TDEVFest23Live",
                    "active": false
                },
                {
                    "debut": "12:40",
                    "fin": "12:50",
                    "title": "Spot Publicitaire",
                    "description": "Spot Publicitaire Propel",
                    "active": false
                },
                {
                    "debut": "12:50",
                    "fin": "14:00",
                    "title": "Pause Déjeuner",
                    "description": "Pause Déjeuner + Job Dating",
                    "active": false
                },
                {
                    "debut": "14:05",
                    "fin": "15:05",
                    "title": "Panel 3",
                    "description": "TDEV Women in Tech Talk - Implication des femmes dans le numérique en Afrique",
                    "active": false
                },
                {
                    "debut": "15:10",
                    "fin": "15:50",
                    "title": "Workshop A",
                    "description": "Monitorer votre application en production\nWorkshop B : Automatiser le web scraping avec les Github actions",
                    "active": false
                },
                {
                    "debut": "15:55",
                    "fin": "16:20",
                    "title": "Keynote 2",
                    "description": "Comment la création de contenus web peut impacter le racisme et la misogynie en ligne ?",
                    "active": false
                },
                {
                    "debut": "16:25",
                    "fin": "17:05",
                    "title": "Workshop C",
                    "description": "Plongez dans l’univers du Lowcode/Nocode avec Microsoft Power Platform et Power Virtual Agents",
                    "active": false
                },
                {
                    "debut": "",
                    "fin": "",
                    "title":"Workshop D",
                    "description": " Comment assurer une Expérience Utilisateur intuitive tout en priorisant l'Accessibilité : Guides Pratiques pour les Designers et Développeurs",
                    "active": "false",
                },
                {
                    "debut": "17:10",
                    "fin": "17:20",
                    "title": "Mot de fin",
                    "description": "",
                    "active": false
                }
            ]
        },        
        {
            "id": 2,
            "title": "Deuxième jour",
            "date": "26 AOUT 2023",
            "active": false,
            "content": [
                {
                    "debut": "08:00",
                    "fin": "09:30",
                    "title": "Accueil",
                    "description": "Enregistrement des participants et pause-café",
                    "active": false
                },
                {
                    "debut": "09:30",
                    "fin": "10:30",
                    "title": "Panel 4",
                    "description": "Data et IA au service du développement durable des entreprises",
                    "active": false
                },
                {
                    "debut": "10:35",
                    "fin": "10:55",
                    "title": "Keynote 3",
                    "description": "L'inclusion numérique: Éliminer les disparités et favoriser l'accès pour tous.",
                    "active": false
                },
                {
                    "debut": "11:00",
                    "fin": "12:00",
                    "title": "Panel 5",
                    "description": "Cybersécurité : Enjeux et défis de la protection des données personnelles",
                    "active": false
                },
                {
                    "debut": "12:05",
                    "fin": "12:45",
                    "title": "Keynote 4",
                    "description": "L’impact de la digitalisation sur les processus RH",
                    "active": false
                },
                {
                    "debut": "12:50",
                    "fin": "14:00",
                    "title": "Pause Déjeuner + Job Dating",
                    "description": "",
                    "active": false
                },
                {
                    "debut": "14:05",
                    "fin": "14:25",
                    "title": "Keynote 5",
                    "description": "BEYOND INNOVATION",
                    "active": false
                },
                {
                    "debut": "14:30",
                    "fin": "15:15",
                    "title": "Workshop E",
                    "description": "ISMS, Cybersécurité et Protection des données : Normes, Exigences, Procédures et documentation\nWorkshop F : Construisez votre site web avec Notion",
                    "active": false
                },
                {
                    "debut": "15:20",
                    "fin": "16:20",
                    "title": "TDEV Open Talk",
                    "description": "Nous répondons aux questions des participants par rapport aux différents programmes de TDEV et les activités à venir",
                    "active": false
                },
                {
                    "debut": "16:25",
                    "fin": "17:00",
                    "title": "Annonce et remise des packs",
                    "description": "Annonce et remise des packs aux gagnants du #TDEVFest23Live",
                    "active": false
                },
                {
                    "debut": "17:00",
                    "fin": "17:15",
                    "title": "Séance de restitution",
                    "description": "Séance de restitution du TDEV FESTIVAL 2023",
                    "active": false
                },
                {
                    "debut": "17:15",
                    "fin": "17:30",
                    "title": "Remerciements et présentation",
                    "description": "Remerciements des partenaires et présentation de l'équipe d'organisation ET FIN DU TDEV FESTIVAL 2023",
                    "active": false
                }
            ]
        }
        

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
        <h5 className="text-7xl lg:text-[8rem] uppercase text-left md:text-center">
            <Heading>
                Programme
            </Heading>
        </h5>
        <div  data-aos="fade-up" daa-aos-delay="200" className="flex justify-center ">
            <div className=" text-gray-700 md:text-xl mt-5  ">
                vous pouvez télécharger la version  numerique(pdf) du  programme en  
                <Link  target="_blank" href="./files/PROGRAMME-DU-TDEV-FESTIVAL-2023.pdf" passHref className="text-primary font-semibold hover:text-third" >
                <span className=" ">  Cliquant ici  </span>
            </Link>
            </div>
        </div>

        <div className="py-10 w-11/12   lg:w-10/12 mx-auto ">
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