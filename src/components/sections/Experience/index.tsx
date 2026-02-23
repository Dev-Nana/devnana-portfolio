"use client"

import * as S from "./styles"
import { FiSettings, FiPieChart, FiCode, FiLayers } from "react-icons/fi"

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
    title: "Diretor de Projetos & TechLead (2 anos)",
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
  return (
    <S.Section>
      <S.Container>
        <S.Header>
          <h2>Experiência & Atividades</h2>
          <p>
            Minha jornada profissional, acadêmica e minhas contribuições em
            diversas frentes de desenvolvimento.
          </p>
        </S.Header>

        <S.Cards>
          {experiences.map((item, index) => {
            const Icon = item.icon

            return (
              <S.Card key={index}>
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
