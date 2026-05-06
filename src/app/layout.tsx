import { Metadata } from "next"
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry"
import { ThemeContextProvider } from "@/context/ThemeContext"
import { ReduxProvider } from "./providers"
import { Lora, Open_Sans } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://devnana.netlify.app"),

  title: "Dev Nana | Portfólio",
  description:
    "Desenvolvedora Full Stack em formação pela UFC em Engenharia de Software...",

  alternates: {
    canonical: "https://devnana.netlify.app",
  },

  openGraph: {
    title: "Dev Nana | Portfólio",
    description:
      "Portfólio profissional",
    url: "https://devnana.netlify.app",
    siteName: "Dev Nana",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dev Nana",
              jobTitle: "Desenvolvedora Full Stack",
              url: "https://devnana.netlify.app",
              sameAs: [
                "https://github.com/dev-nana",
              ],
            }),
          }}
        />
      </head>
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
