"use client"

import * as S from "./styles"
import { FiGithub, FiInstagram } from "react-icons/fi"

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.Left>
          © {new Date().getFullYear()} Dev Nana
        </S.Left>

        <S.Right>
          <a
            href="https://github.com/Dev-Nana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.instagram.com/evylaveras/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </S.Right>
      </S.Container>
    </S.Footer>
  )
}
