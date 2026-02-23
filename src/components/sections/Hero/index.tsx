"use client"

import Image from "next/image"
import * as S from "./styles"

export function Hero() {
    return (
        <S.Container>
            <S.Content>
                <S.AvatarWrapper>
                    <S.OuterDashed />
                    <S.InnerDashed />

                    <S.AvatarCircle>
                        <Image
                            src="/avatar.jpg"
                            alt="Foto Nana"
                            fill
                            priority
                            sizes="(max-width: 768px) 200px, 250px"
                            style={{ objectFit: "cover" }}
                        />
                    </S.AvatarCircle>

                    <S.Badge />
                </S.AvatarWrapper>



                <S.Title>
                    Construindo Projetos e <br />
                    Experiências Digitais pelo Mundo
                </S.Title>

                <S.Subtitle>
                    Desenvolvedora Full-Stack e Engenheira de Software
                </S.Subtitle>

                <S.Button href="#contato">Fale Comigo</S.Button>
            </S.Content>
        </S.Container>
    )
}
