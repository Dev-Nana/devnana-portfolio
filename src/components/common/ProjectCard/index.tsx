"use client"

import * as S from "./styles"
import Image from "next/image"
import { memo } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github: string
  demo: string
}

function ProjectCardComponent({
  title,
  description,
  image,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </S.ImageWrapper>
      <S.Content>
        <h3>{title}</h3>
        <p>{description}</p>

        <S.ButtonGroup>
          <S.Button href={github} target="_blank">GitHub</S.Button>
          <S.Button variant="secondary" href={demo} target="_blank">Demo</S.Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Card>
  )
}

export const ProjectCard = memo(ProjectCardComponent)
