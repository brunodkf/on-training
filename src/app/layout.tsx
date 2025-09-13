import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Exo_2 } from "next/font/google";
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

const exo2 = Exo_2({
  variable: "--font-exo-2-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "On Training - Transforme seu corpo com treinos inteligentes",
  description: "Plataforma completa de treinos online com suporte personalizado e resultados reais.",
  keywords: [
    'treinos online',
    'transforme seu corpo',
    'personal',
    'academia',
  ],
  icons: {
    icon: "/logo.webp",
  },
  authors: [{ name: 'Bruno Furtado', url: 'https://brunodkf.vercel.app' }],
  creator: 'Bruno Furtado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${exo2.variable} ${montserrat.variable} ${inter.variable} antialiased text-branco overflow-x-clip`}>
        {children}
      </body>
    </html>
  )
}
