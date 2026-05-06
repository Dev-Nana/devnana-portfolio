"use client"

import { Blobs } from "@/components/common/Blobs"
import { ProjectCard } from "../../common/ProjectCard"
import * as S from "./styles"
import Link from "next/link"

import { useInView } from "@/hooks/useInView"
import { Sparkles } from "@/components/common/Sparkles"

const projects = [
  {
    id: "music-pich-1",
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "music-pich-2",
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "music-pich-3",
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "music-pich-4",
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  const sparkles = [
    { top: "25%", left: "10%", delay: "0s" },
    { top: "20%", left: "20%", delay: "1s" },
    { top: "10%", left: "5%", delay: "2.5s" },
    { top: "49%", left: "5%", delay: "3s" },
  ]

  const blobs = [
    { top: "-1%", right: "5%" },
  ]

  return (
    <S.Section id="projetos" ref={ref}>
      <Blobs items={blobs} />
      <Sparkles items={sparkles} />
      <S.Header $visible={isVisible}>
        <h2>Meus Projetos</h2>
        <p>
          Uma seleção dos meus trabalhos mais recentes, em tecnologia e design.
        </p>
        <p>Explore os projetos e veja meu GitHub.</p>
        <Link href="/projects">
          <S.ViewAllButton>Ver todos os projetos</S.ViewAllButton>
        </Link>
      </S.Header>

      <S.Cards>
        {projects.map((project, i) => (
          <S.CardWrapper
            key={project.id}
            $visible={isVisible}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <ProjectCard {...project} />
          </S.CardWrapper>
        ))}
      </S.Cards>
    </S.Section>
  )
}