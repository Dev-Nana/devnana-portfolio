import styled, { keyframes } from "styled-components"
import type { BlobColor } from "./index"

const float = keyframes`
  0% { transform: translate(0, 0) rotate(10deg); }
  50% { transform: translate(20px, -30px) rotate(15deg); }
  100% { transform: translate(0, 0) rotate(10deg); }
`

export const Blob = styled.div<{
  top?: string
  left?: string
  right?: string
  $color?: BlobColor
}>`
  position: absolute;

  top: ${({ top = "20%" }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  width: 350px;
  height: 350px;

  background: radial-gradient(
    circle,
    ${({ theme, $color = "primary" }) => {
      const map = {
        secondary: theme.colors.effectPrimary,
        primary: theme.colors.effectSecondary,
      }

      return `${map[$color]}22`
    }} 0%,
    transparent 80%
  );

  filter: blur(50px);
  z-index: 1;

  animation: ${float} 10s infinite ease-in-out;
`