import { Metadata } from "next"
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry"
import { ThemeContextProvider } from "@/context/ThemeContext"
import { ReduxProvider } from "./providers"
import { Lora, Open_Sans } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dev Nana | Portfólio",
  description:
    "Desenvolvedora Full Stack em formação pela UFC em Engenharia de Software...",
  openGraph: {
    title: "Dev Nana | Portfólio",
    description:
      "Portfólio profissional com projetos em React, Next.js e Carreira.",
    type: "website",
    locale: "pt_BR",
  },
};


const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-header",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${openSans.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider>
            <ThemeContextProvider>
              {children}
            </ThemeContextProvider>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
