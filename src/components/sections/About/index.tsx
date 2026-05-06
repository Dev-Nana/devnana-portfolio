"use client"

import { TbBrandJavascript } from "react-icons/tb"
import { SiTypescript } from "react-icons/si"
import { RiJavaLine } from "react-icons/ri"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { FaVuejs } from "react-icons/fa6"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si";

import * as S from "./styles"
import { useInView } from "@/hooks/useInView"
import { Blobs } from "@/components/common/Blobs"
import type { BlobItem } from "@/components/common/Blobs"

const skills = [
  { name: "JavaScript", icon: <TbBrandJavascript size={20} /> },
  { name: "TypeScript", icon: <SiTypescript size={20} /> },
  { name: "Java", icon: <RiJavaLine size={20} /> },
  { name: "React", icon: <FaReact size={20} /> },
  { name: "Vue", icon: <FaVuejs size={20} /> },
  { name: "Node", icon: <FaNodeJs size={20} /> },
  { name: "Next", icon: <TbBrandNextjs size={20} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
]

export function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  const blobs : BlobItem[] = [
    { top: "-40%", right: "13%", $color: "primary" },
    { top: "30%", left: "-10%", $color: "secondary" },
    { top: "-20%", left: "-10%", $color: "secondary" },
  ]

  return (
    <S.Section id="sobre">
      <Blobs items={blobs}/>
      <S.Container ref={ref}>
        <S.Title $visible={isVisible}>Sobre Mim</S.Title>

        <S.Description $visible={isVisible}>
          Olá! Sou Geovana Veras, uma Desenvolvedora Full Stack em formação pela
          UFC em Engenharia de Software. Minha experiência inclui a gestão e
          liderança como Diretora de Projetos em uma Empresa Júnior, além do meu
          papel atual como Analista de Sistemas Estagiária em Sorocaba.
        </S.Description>

        <S.Subtitle $visible={isVisible}>
          Minhas Habilidades
        </S.Subtitle>

        <S.Skills>
          {skills.map((skill, i) => (
            <S.Skill
              key={skill.name}
              $visible={isVisible}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {skill.icon}
              {skill.name}
            </S.Skill>
          ))}
        </S.Skills>
      </S.Container>
    </S.Section>
  )
}