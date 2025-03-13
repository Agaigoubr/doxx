import { Inter } from 'next/font/google'
import Image from 'next/image'
import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio | Ibrahimdex',
  description: 'Porfolio | |Ibrahimdex| devloper frond end',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">

      <body
     
      className={inter.className}>
      <Header />
        {children}
        
        </body>
    </html>
  )
}
