"use client"

import { Header } from "@/components/Layout/Header"
import * as S from "./styles"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { useInView } from "@/hooks/useInView"

const projects = [
    {
        title: "Music Pich",
        description:
            "Uma experiência imersiva que consome a API do Spotify, permitindo aos usuários pesquisar, visualizar e explorar dados musicais em tempo real com uma interface fluida.",
        tags: ["React", "Next.js", "Spotify API", "Styled Components"],
        image: "/music-pich-dev-nana.jpg",
        github: "#",
        demo: "#",
    },
    {
        title: "Internal Process Optimizer",
        description:
            "Sistema inteligente desenvolvido para a otimização de processos corporativos internos, reduzindo o tempo de execução de tarefas em até 40%.",
        tags: ["TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
        image: "/music-pich-dev-nana.jpg",
        github: undefined,
        demo: "#",
    },
]

export default function ProjectsPage() {
    const { ref, isVisible } = useInView<HTMLDivElement>()

    return (
        <>
            <Header />

            <S.Section>
                <S.Container>

                    <S.Hero>
                        <span>PORTFÓLIO</span>
                        <h1>Projetos em Destaque</h1>
                        <p>
                            Projetos reais que desenvolvi ao longo da minha jornada.
                        </p>
                    </S.Hero>

                    <S.List ref={ref}>
                        {projects.map((project, index) => {
                            const projectNumber = String(index + 1).padStart(2, '0')

                            return (
                                <S.Project
                                    key={index}
                                    $reverse={index % 2 !== 0}
                                    $visible={isVisible}
                                    $delay={index}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect()
                                        const x = e.clientX - rect.left
                                        const y = e.clientY - rect.top

                                        e.currentTarget.style.setProperty("--x", `${x}px`)
                                        e.currentTarget.style.setProperty("--y", `${y}px`)
                                    }}
                                >
                                    <S.ImageWrapper>
                                        <img src={project.image} alt={project.title} />
                                    </S.ImageWrapper>

                                    <S.Content>
                                        <S.ProjectIndex>{projectNumber}</S.ProjectIndex>
                                        <h2>{project.title}</h2>

                                        <S.TagList>
                                            {project.tags.map((tag, i) => (
                                                <span key={i}>{tag}</span>
                                            ))}
                                        </S.TagList>

                                        <p>{project.description}</p>

                                        <S.Actions>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                                    <FiGithub />
                                                    <span>Código</span>
                                                </a>
                                            )}

                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                                                    <FiExternalLink />
                                                    <span>Visualizar</span>
                                                </a>
                                            )}
                                        </S.Actions>
                                    </S.Content>
                                </S.Project>
                            )
                        })}
                    </S.List>

                </S.Container>
            </S.Section>
        </>
    )
}