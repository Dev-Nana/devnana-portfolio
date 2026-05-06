"use client"

import * as S from "./styles"
import { useInView } from "@/hooks/useInView"
import { FiSettings, FiPieChart, FiCode, FiLayers } from "react-icons/fi"

import { BlobItem, Blobs } from "@/components/common/Blobs"

const experiences = [
  {
    icon: FiSettings,
    title: "Analista Associado de Tecnologia (atual)",
    company: "Media.Monks • Sorocaba",
    description:
      "Atuação em desenvolvimento de sistemas, suporte a aplicações.",
  },
  {
    icon: FiPieChart,
    title: "Direção de Projetos & TechLead (2 anos)",
    company: "Avante Tech Jr • UFC Quixadá",
    description:
      "Liderança de equipes, definição de processos de trabalho e acompanhamento de projetos.",
  },
  {
    icon: FiCode,
    title: "Desenvolvedor Front-end (300h)",
    company:
      "Estágio no NTI da Embrapa • Fortaleza, Campus do Pici",
    description:
      "Colaboração no desenvolvimento de uma automação para previsão de safra de caju, processos antes feitos em papel.",
  },
  {
    icon: FiLayers,
    title: "Projeto Social (6 meses)",
    company:
      "Trabalho de Conclusão de Curso de Informática • Paraipaba",
    description:
      "Colaboração no desenvolvimento de um website para a divulgação e comunicação entre vendedores e compradores de coco.",
  },
]

export function Experience() {

  const { ref, isVisible } = useInView<HTMLDivElement>()

  const blobs: BlobItem[] = [
    { top: "45%", right: "8%", $color: "primary" },
    { top: "10%", left: "10%", $color: "secondary" },
    { top: "50%", left: "-10%", $color: "primary" },
  ]

  return (
    <S.Section>
      <Blobs items={blobs}/>
      <S.Container ref={ref}>
        <S.Header $visible={isVisible}>
          <h2>Experiência & Atividades</h2>
          <p>
            Minha jornada profissional, acadêmica e minhas contribuições em
            diversas frentes de desenvolvimento.
          </p>
        </S.Header>

        <S.Cards>
          {experiences.map((item, i) => {
            const Icon = item.icon

            return (
              <S.Card
                key={item.title}
                $visible={isVisible}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top

                  e.currentTarget.style.setProperty("--x", `${x}px`)
                  e.currentTarget.style.setProperty("--y", `${y}px`)
                }}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <S.Icon>
                  <Icon />
                </S.Icon>

                <div>
                  <h3>{item.title}</h3>
                  <span>{item.company}</span>
                  <p>{item.description}</p>
                </div>
              </S.Card>
            )
          })}
        </S.Cards>
      </S.Container>
    </S.Section>
  )
}
