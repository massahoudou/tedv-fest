"use client";
import './aos.css'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionContact from '@/components/sections/SectionContact'
import SectionSponsor from '@/components/sections/SectionSponsor'
import { Sectionheader } from '@/components/sections/SectionsHeaders'
import SectionProgram  from '@/components/sections/SectionProgram'
import { useEffect } from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import AOS from 'aos';                                                                                                                                                                                                                                                                                                                                                                                                  
import { Analytics } from '@vercel/analytics/react';
import SectionGallery from '@/components/sections/SectionGallery';
import SectionSpeaker from '@/components/sections/SectionSpeaker';
export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true ,
      anchorPlacement: 'top-bottom',
    }); 
    window.addEventListener('load', AOS.refresh)
  },[])
  return <div>
    <Analytics />
    <Sectionheader target={'2023-08-25T07:59:59'}/>
    <SectionAbout />
   
    <SectionProgram/>
    <SectionSponsor />
<SectionGallery/>
    <SectionContact />
  </div>

}
