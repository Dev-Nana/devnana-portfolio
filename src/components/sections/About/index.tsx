"use client"

import { TbBrandJavascript  } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { FaLinode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import * as S from "./styles"

export function About() {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.Title>Sobre Mim</S.Title>

        <S.Description>
          Olá! Sou Geovana Veras, uma Desenvolvedora Full Stack em formação pela
          UFC em Engenharia de Software. Minha experiência inclui a gestão e
          liderança como Diretora de Projetos em uma Empresa Júnior, além do meu
          papel atual como Analista de Sistemas Estagiária em Sorocaba.
        </S.Description>

        <S.Subtitle>Minhas Habilidades</S.Subtitle>

        <S.Skills>
          <S.Skill><TbBrandJavascript size={20}/>JavaScript</S.Skill>
          <S.Skill><SiTypescript size={20}/>TypeScript</S.Skill>
          <S.Skill><RiJavaLine size={20}/>Java</S.Skill>
          <S.Skill><FaReact size={20}/>React</S.Skill>
          <S.Skill><FaVuejs size={20}/>Vue</S.Skill>
          <S.Skill><FaLinode size={20}/>Node</S.Skill>
          <S.Skill><TbBrandNextjs size={20}/>Next</S.Skill>
          <S.Skill><RiTailwindCssFill size={20}/>Tailwind</S.Skill>
        </S.Skills>
      </S.Container>
    </S.Section>
  )
}
