"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import * as S from "./styles"
import { Sparkles } from "@/components/common/Sparkles"
import { Blobs } from "@/components/common/Blobs"

const TILT_INTENSITY = 20

export function Hero() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const frame = useRef<number | null>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (frame.current) cancelAnimationFrame(frame.current)

        frame.current = requestAnimationFrame(() => {
            const { innerWidth, innerHeight } = window

            const x = (e.clientX / innerWidth - 0.5) * TILT_INTENSITY
            const y = (e.clientY / innerHeight - 0.5) * TILT_INTENSITY

            setTilt({ x, y })
        })
    }

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const sparkles = [
        { top: "25%", left: "30%", delay: "0s" },
        { top: "50%", left: "80%", delay: "1s" },
        { top: "70%", left: "20%", delay: "2.5s" },
        { top: "44%", left: "82%", delay: "3s" },
    ]

    const blobs = [
        { top: "-1%", right: "5%" },
        { top: "60%", right: "-5%" },
        { top: "90%", right: "15%" },
    ]

    return (
        <S.Container onMouseMove={!isMobile ? handleMouseMove : undefined}>
            <S.FineLine />
            <S.LightCurves />

            <Blobs items={blobs} />

            <Sparkles items={sparkles} />

            <S.Content $tiltX={tilt.x} $tiltY={tilt.y} $isMobile={isMobile}>
                <S.AvatarWrapper>
                    <S.OuterDashed />
                    <S.InnerDashed />

                    <S.AvatarCircle>
                        <Image
                            src="/avatar.jpg"
                            alt="Foto de perfil de Nana"
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