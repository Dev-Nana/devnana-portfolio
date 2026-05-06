"use client"

import * as S from "./styles"
import { useRef, useState } from "react"
import { IoMailUnreadOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/store"
import { sendContactEmail, resetContactState } from "@/store/contactSlice"
import { useInView } from "@/hooks/useInView"
import { Sparkles } from "@/components/common/Sparkles"
import { BlobItem, Blobs } from "@/components/common/Blobs"

export function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  const form = useRef<HTMLFormElement>(null)

  const dispatch = useDispatch<AppDispatch>()
  const { loading, success, error } = useSelector(
    (state: RootState) => state.contact
  )

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  function validate() {
    const newErrors: { [key: string]: string } = {}

    const formData = new FormData(form.current!)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name) newErrors.name = "*"

    if (!email) {
      newErrors.email = "*"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "inválido"
    }

    if (!message) {
      newErrors.message = "*"
    } else if (message.length < 15) {
      newErrors.message = "Mínimo 15 caracteres"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return
    if (!validate()) return

    dispatch(sendContactEmail(form.current))
  }

  const sparkles = [
    { top: "25%", left: "10%", delay: "0s" },
    { top: "30%", left: "80%", delay: "1s" },
    { top: "70%", left: "20%", delay: "2.5s" },
    { top: "44%", left: "92%", delay: "3s" },
    { top: "44%", left: "82%", delay: "3s" },
  ]

  const blobs: BlobItem[] = [
    { top: "45%", left: "13%", $color: "primary" },
    { top: "-15%", left: "-4%", $color: "primary" },
  ]

  return (
    <S.Section>
      <Blobs items={blobs}/>
      <S.Container ref={ref}>
        <Sparkles items={sparkles} />
        <S.Header $visible={isVisible}>
          <h2>Fale Comigo</h2>
          <p>
            Tem interesse em novas oportunidades ou simplesmente trocar uma ideia?
            Envie uma mensagem!
          </p>
        </S.Header>

        <S.FormWrapper
          $visible={isVisible}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            e.currentTarget.style.setProperty("--x", `${x}px`)
            e.currentTarget.style.setProperty("--y", `${y}px`)
          }}
        >
          {!success ? (
            <>
              <h3>Envie uma mensagem!</h3>

              <S.Form ref={form} onSubmit={sendEmail}>
                <S.Field $error={!!errors.name}>
                  <label>
                    Nome <span>{errors.name && `${errors.name}`}</span>
                  </label>
                  <input type="text" name="name" />
                </S.Field>

                <S.Field $error={!!errors.email}>
                  <label>
                    Email <span>{errors.email && `${errors.email}`}</span>
                  </label>
                  <input type="email" name="email" />
                </S.Field>

                <S.Field $error={!!errors.message}>
                  <label>
                    Mensagem <span>{errors.message && `${errors.message}`}</span>
                  </label>
                  <textarea name="message" />
                </S.Field>

                <S.Button type="submit" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </S.Button>

                {error && <S.Error>{error}</S.Error>}
              </S.Form>
            </>
          ) : (
            <S.SuccessScreen>
              <S.SuccessIcon>
                <IoMailUnreadOutline />
              </S.SuccessIcon>

              <p>Mensagem enviada com sucesso!</p>
              <p>Obrigada por entrar em contato. Responderei em breve</p>

              <S.Button
                type="button"
                onClick={() => {
                  dispatch(resetContactState())
                  setErrors({})
                  form.current?.reset()
                }}
              >
                Enviar outra mensagem
              </S.Button>
            </S.SuccessScreen>
          )}
        </S.FormWrapper>
      </S.Container>
    </S.Section>
  )
}
