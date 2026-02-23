"use client"

import { ProjectCard } from "../../common/ProjectCard";
import * as S from "./styles"

const projects = [
  {
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Music Pich",
    description:
      "Construído com React, TypeScritp e Tailwind.css. O projeto consome a API do Spotify para permitir que o usuário realize pesquisas e visualize informações sobre músicas.",
    image: "/music-pich-dev-nana.jpg",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <S.Section id="projetos">
      <S.Header>
        <h2>Meus Projetos</h2>
        <p>
          Uma seleção dos meus trabalhos mais recentes, que refletem minha paixão por tecnologia e design. Explore os projetos e veja meu GitHub.
        </p>
      </S.Header>

      <S.Cards>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </S.Cards>
    </S.Section>
  )
}
