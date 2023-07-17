"use client";
import Navbar from '@/components/Navbar'
import Image from 'next/image'


import SectionAbout from '@/components/sections/SectionAbout'
import SectionSpeaker from '@/components/sections/SectionSpeaker'
import SectionContact from '@/components/sections/SectionContact'
import SectionPartener from '@/components/sections/SectionPartener'
import SectionSponsor from '@/components/sections/SectionSponsor'
import { Sectionheader } from '@/components/sections/SectionsHeaders'
import SectionProgram from '@/components/sections/SectionProgram';
import { Anton } from 'next/font/google';


export default function Home() {
  return <div>
    <Sectionheader target={'2023-07-31T07:59:59'}/>
    <SectionAbout />
    <SectionSpeaker />
    <SectionProgram/>
    <SectionPartener />
    <SectionSponsor />
    <SectionContact />
  </div>

}
