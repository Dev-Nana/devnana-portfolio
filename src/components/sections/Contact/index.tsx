"use client"

import * as S from "./styles"
import { useRef, useState } from "react"
import { IoMailUnreadOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/store"
import { sendContactEmail, resetContactState } from "@/store/contactSlice"

export function Contact() {
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

    if (!name) newErrors.name = "obrigatório"

    if (!email) {
      newErrors.email = "obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "inválido"
    }

    if (!message) {
      newErrors.message = "obrigatório"
    } else if (message.length < 15) {
      newErrors.message = "mínimo 15 caracteres"
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

  return (
    <S.Section>
      <S.Container>
        <S.Header>
          <h2>Fale Comigo</h2>
          <p>
            Tem interesse em novas oportunidades ou simplesmente trocar uma ideia?
            Envie uma mensagem!
          </p>
        </S.Header>

        <S.FormWrapper>
          {!success ? (
            <>
              <h3>Envie uma mensagem!</h3>

              <S.Form ref={form} onSubmit={sendEmail}>
                <S.Field>
                  <label>
                    Nome {errors.name && `(${errors.name})`}
                  </label>
                  <input type="text" name="name" />
                </S.Field>

                <S.Field>
                  <label>
                    Email {errors.email && `(${errors.email})`}
                  </label>
                  <input type="email" name="email" />
                </S.Field>

                <S.Field>
                  <label>
                    Mensagem {errors.message && `(${errors.message})`}
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
