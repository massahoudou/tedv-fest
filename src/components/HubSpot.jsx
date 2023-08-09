"use client"
import { useEffect, useState } from "react";


const HubSpot = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {

      window.hbspt.forms.create({
        region: 'na1',
        portalId: '23778986',
        formId: 'f0421904-3257-4f01-b062-cb6177775037',
        target: '#hubspotForm'
      });
      setIsLoading(false)
    });

    return () => {
      document.body.removeChild(script);
    };
  }, [])
  return (
    (!isLoading ? <div className="h-fit  w-11/12 lg:w-5/12  mx-auto     bg-white mt-5    p-4">
      <div id="hubspotForm"></div>
    </div> : <div className="animate-pulse  h-fit  w-11/12 lg:w-5/12  mx-auto     bg-white mt-5    p-4 mb-10">
      <div>
        <div className="h-4 w-32 bg-gray-300 rounded my-3">

        </div>
        <div className="h-10 bg-gray-300 rounded">

        </div>
      </div>
      <div>
        <div className="h-4 w-32 bg-gray-300 rounded my-3">

        </div>
        <div className="h-10 bg-gray-300 rounded">

        </div>
      </div>
      <div>
        <div className="h-4 w-32 bg-gray-300 rounded my-3">

        </div>
        <div className="h-10 bg-gray-300 rounded">

        </div>
      </div>
      <div>
        <div className="h-4 w-32 bg-gray-300 rounded my-3">

        </div>
        <div className="h-10 bg-gray-300 rounded">

        </div>
      </div>
      <div>
        <div className="h-4 w-32 bg-gray-300 rounded my-3">

        </div>
        <div className="h-10 bg-gray-300 rounded">

        </div>
      </div>
    
      <div>
        <div className="h-10 w-32 bg-gray-300 rounded my-3">

        </div>
      
      </div>
    </div>)



  )
}

export default HubSpot;