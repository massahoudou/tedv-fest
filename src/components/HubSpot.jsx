"use client"
import {  useEffect } from "react";


const HubSpot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);

    script.onload = () => {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '23778986',
        formId: 'f0421904-3257-4f01-b062-cb6177775037',
        target: '#hubspotForm'
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [])
  return (
   
      <div className="h-fit  w-11/12 lg:w-5/12  mx-auto     bg-white mt-5    p-4">
        <div id="hubspotForm"></div>
      </div>
   

  )
}

export default HubSpot;