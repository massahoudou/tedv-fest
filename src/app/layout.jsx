
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'],weight: ['400' ,'600' , '800'] })

export const metadata = {
  title: {
    default: "TDEV Festival : Synergie entre Transformation Numérique et Développement Durable",
    template: "%s"
  },
  description: "Explorez le TDEV Festival, l'événement incontournable qui célèbre la synergie entre la transformation numérique et le développement durable pour un avenir innovant et écologiquement responsable. Découvrez comment le numérique devient un moteur essentiel du progrès écologique et social."
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr"> 
      <Head>
      <meta name="keywords" content="TDEV Festival, Transformation Numérique, Développement Durable, Synergie, Innovation, Écologie, Numérique, Social" />
      <meta property="og:image" content="/image/1.jpg" />
      <meta name="author" content=" Tdev / Massahoud ODANOU /2023" />
      </Head>

      <body className={`${jakarta.className} overflow-x-hidden  `} >
      
        {children}
        </body>
    </html>
  )
}
