"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'


import SectionAbout from '@/components/sections/SectionAbout'
import SectionSpeaker from '@/components/sections/SectionSpeaker'
import SectionContact from '@/components/sections/SectionContact'
import SectionPartener from '@/components/sections/SectionPartener'
import SectionSponsor from '@/components/sections/SectionSponsor'
import { Anton, Plus_Jakarta_Sans } from 'next/font/google'
import { Sectionheader } from '@/components/sections/SectionsHeaders'


const anton = Anton({subsets: ['latin'],weight: ['400']})
const jakarta = Plus_Jakarta_Sans({subsets: ['latin'], weight: ['400','500','600']})
export default function Home() {
  return <div>
     <style jsx global>{`
        body {
          font-family: ${jakarta.style.fontFamily} !important;
        }
        h1,h2,h3,h4,h5,h6 ,timeCard {
          font-family: ${anton.style.fontFamily} !important;
        }
      `}</style>
     <Sectionheader/>
      <SectionAbout/>
      <SectionSpeaker/>
      <SectionPartener/>
      <SectionSponsor/>
      <SectionContact/>
  </div>

}
