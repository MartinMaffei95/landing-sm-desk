import './globals.css'
import { DM_Sans, Open_Sans } from 'next/font/google'

import DirectAccess from '@/app/Components/DirectAccess/DirectAccess'
import { FiAtSign } from 'react-icons/fi'
import Image from 'next/image'
import GoogleAnalytics from '@/app/Components/GoogleAnalitycs/GoogleAnalitycs'
export const metadata = {
  title: 'SocialMedia1989',
  description: 'Generated by create next app',
}
//Windows10
const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400'],
})
//Windows98
const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process?.env?.GA_TRACKING_ID || ''} />
      <body
        className={`grid-body-wrapper max-w-screen max-h-screen overflow-hidden font-w98 `}
      >
        <header className="flex min-h-sreen items-start justify-start icons-area p-4">
          <nav className="flex gap-4 fixed bottom-0 left-0 w-full sm:flex-col sm:static">
            <DirectAccess route="/clients" name="Clientes" />

            <DirectAccess route="/about" name="Nosotros" />

            <DirectAccess
              icon={'/ico/w98/ico/mailbox_world.ico'}
              route="/contact"
              name="Contactanos"
            />
          </nav>
        </header>
        {/* Windows 10 bg */}
        <Image
          className="-z-10 object-cover"
          fill
          alt="background image"
          priority
          src={'/images/w95F.jpg'}
        />
        {children}
      </body>
    </html>
  )
}
