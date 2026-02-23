"use client"

import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { Sun, Moon, Menu, X } from "lucide-react"
import * as S from "./styles"

export function Header() {
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


  const activeSection = useScrollSpy([
    "inicio",
    "sobre",
    "projetos",
    "experiencia",
    "contato",
  ])


  return (
    <>
      <S.Container $scrolled={scrolled}>

        <S.Logo>nana.</S.Logo>

        <S.DesktopNav>
          <a href="#inicio" className={activeSection === "inicio" ? "active" : ""}>Início</a>
          <a href="#sobre" className={activeSection === "sobre" ? "active" : ""}>Sobre Mim</a>
          <a href="#projetos" className={activeSection === "projetos" ? "active" : ""}>Projetos</a>
          <a href="#experiencia" className={activeSection === "experiencia" ? "active" : ""}>Experiência</a>
          <a href="#contato" className={activeSection === "contato" ? "active" : ""}>Contato</a>
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

        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre Mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencia">Experiência</a>
        <a href="#contato">Contato</a>
      </S.MobileMenu>

      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}
    </>
  )
}
