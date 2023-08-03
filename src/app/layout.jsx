
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './aos.css'
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'],weight: ['400' ,'600' , '800'] })


export const metadata = {
  openGraph: {
    title: 'TDEV Festival : Synergie entre Transformation Numérique et Développement Durable',
    description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social.",
    type: 'article',
    publishedTime: '2023-8-31T00:00:00.000Z',
    authors: ['TDEV COMMUNITY'],
    url: 'festival.ourtdev.com',
    siteName: 'Tdev festival 2023',
    locale: 'fr_TG',
    type: 'website',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/D4E0BAQEEoRS2jKAgwg/company-logo_200_200/0/1683890031268?e=1698883200&v=beta&t=UytafDufJrTMk-RAELX7NibdS5YNtuJ2O8_OJ3ecoNU',
        width: 800,
        height: 600,
      },
      {
        url: 'https://media.licdn.com/dms/image/D4E0BAQEEoRS2jKAgwg/company-logo_200_200/0/1683890031268?e=1698883200&v=beta&t=UytafDufJrTMk-RAELX7NibdS5YNtuJ2O8_OJ3ecoNU',
        width: 1800,
        height: 1600,
        alt: 'Tdev festival',
      },
    ],
  },
  title: {
    default: "TDEV Festival : Synergie entre Transformation Numérique et Développement Durable",
    template: "%s"
  },
  description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social."
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr"> 
     
      <body className={`${jakarta.className} overflow-x-hidden  `} >

        {children}
        </body>
    </html>
  )
}
