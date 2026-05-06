import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

export const Header = styled.div<{ $visible: boolean }>`
  text-align: center;
  margin: 0 auto 40px;

    h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.7;
    line-height: 1.6;
  }

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(30px)"};

  transition: all 0.6s ease;
`

export const Cards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.gradients.border};
    opacity: 0.3;
  }
`

export const Card = styled.div<{ $visible: boolean }>`
  display: flex;
  gap: 20px;
  padding: 28px;
  border-radius: 16px;

  position: relative;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.03);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  will-change: transform;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateX(0)" : "translateX(-40px)"};

  transition: all 0.7s ease;

  &:hover {
    transform: translateX(0) scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;

  background: radial-gradient(
    250px circle at var(--x) var(--y),
    ${({ theme }) => `${theme.colors.effectPrimary}20`},
    transparent 70%
  );

    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;

    background: ${({ theme }) => theme.gradients.border};

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  h3 {
    font-size: 19px;
    margin-bottom: 6px;
  }

  span {
    display: block;
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    opacity: 0.8;
    line-height: 1.5;
  }
`

export const Icon = styled.div`
  min-width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  border-radius: 12px;

  background: ${({ theme }) => theme.gradients.border};
  color: white;

  flex-shrink: 0;

  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`