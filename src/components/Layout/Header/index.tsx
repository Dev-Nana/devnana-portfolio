"use client"

import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { Sun, Moon, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import * as S from "./styles"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const getHref = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`
  }

  const { toggleTheme, theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  const activeSection = isHome
    ? useScrollSpy(["inicio", "sobre", "projetos", "experiencia", "contato"])
    : ""


  return (
    <>
      <S.Container $scrolled={scrolled}>

        <Link href="/">
          <S.Logo>nana.</S.Logo>
        </Link>

        <S.DesktopNav>
          <Link href={getHref("inicio")} className={activeSection === "inicio" ? "active" : ""}>Início</Link>
          <Link href={getHref("sobre")} className={activeSection === "sobre" ? "active" : ""}>Sobre Mim</Link>
          <Link href={getHref("projetos")} className={activeSection === "projetos" ? "active" : ""}>Projetos</Link>
          <Link href={getHref("experiencia")} className={activeSection === "experiencia" ? "active" : ""}>Experiência</Link>
          <Link href={getHref("contato")} className={activeSection === "contato" ? "active" : ""}>Contato</Link>
        </S.DesktopNav>


        <S.Actions>
          <S.IconButton onClick={toggleTheme}>
            <S.AnimatedIcon key={theme}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </S.AnimatedIcon>
          </S.IconButton>

          <S.MobileMenuButton onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </S.MobileMenuButton>
        </S.Actions>
      </S.Container>

      <S.MobileMenu $isOpen={isOpen}>
        <S.CloseButton onClick={() => setIsOpen(false)}>
          <X size={28} />
        </S.CloseButton>

        <Link href={getHref("inicio")} onClick={() => setIsOpen(false)}>Início</Link>
        <Link href={getHref("sobre")} onClick={() => setIsOpen(false)}>Sobre Mim</Link>
        <Link href={getHref("projetos")} onClick={() => setIsOpen(false)}>Projetos</Link>
        <Link href={getHref("experiencia")} onClick={() => setIsOpen(false)}>Experiência</Link>
        <Link href={getHref("contato")} onClick={() => setIsOpen(false)}>Contato</Link>
      </S.MobileMenu>

      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}
    </>
  )
}
