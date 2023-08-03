"use client";
import './aos.css'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionContact from '@/components/sections/SectionContact'
import SectionSponsor from '@/components/sections/SectionSponsor'
import { Sectionheader } from '@/components/sections/SectionsHeaders'
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true ,
      anchorPlacement: 'top-bottom',
    }); 
    window.addEventListener('load', AOS.refresh)
  },[])
  return <div>

    <Sectionheader target={'2023-08-25T07:59:59'}/>
    <SectionAbout />
    <SectionSponsor />
    <SectionContact />
  </div>

}
