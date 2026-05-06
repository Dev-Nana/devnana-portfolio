import styled, { keyframes } from "styled-components"

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
`

export const Sparkle = styled.div<{
  top: string
  left: string
  delay: string
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: 4px;
  height: 4px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.highlight};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.highlight};

  animation: ${twinkle} 4s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};

  pointer-events: none;
`