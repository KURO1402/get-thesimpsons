import "./globals.css"
import { ReactNode } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function RootLayout({ children }: {children: ReactNode}) {
  return(
    <html>
      <body className="bg-[#FDFBF7] flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
