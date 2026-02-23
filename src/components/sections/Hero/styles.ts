import styled from "styled-components"
import { keyframes } from "styled-components"

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Container = styled.section`
    min-height: 100vh;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${({ theme }) => theme.gradients.hero};
    color: ${({ theme }) => theme.colors.text};
`

export const Content = styled.div`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AvatarWrapper = styled.div`
    position: relative;
    margin-bottom: 30px;
`

export const AvatarCircle = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
    border: 30px solid transparent;

    background:
    linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => theme.colors.background}
    ) padding-box,
    ${({ theme }) => theme.gradients.border} border-box;
`

export const InnerDashed = styled.div`
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    border: 2px dashed ${({ theme }) => theme.colors.highlight};

    
    animation: ${rotate} 30s linear infinite;
    z-index: 3;

`

export const OuterDashed = styled.div`
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 2px dashed ${({ theme }) => theme.colors.highlight};

  animation: ${rotate} 65s linear infinite reverse;
  z-index: 0;
`

export const Badge = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: #df2a8e;
    border-radius: 50%;
`
export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: 48px;
    }
`

export const Subtitle = styled.p`
    font-size: 18px;
    opacity: 0.8;
    margin-bottom: 32px;
`
export const Button = styled.a`
    padding: 14px 28px;
    background: #df2a8e;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    font-family: var(--font-header);
    font-size: 14.4px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 45, 141, 0.3);
    }
`
