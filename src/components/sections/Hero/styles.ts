import styled from "styled-components"
import { keyframes } from "styled-components"

interface BackgroundBlobProps {
    top?: string;
    left?: string;
    right?: string;
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const float = keyframes`
  0% { transform: translate(0, 0) rotate(10deg); }
  50% { transform: translate(20px, -30px) rotate(15deg); }
  100% { transform: translate(0, 0) rotate(10deg); }
`

export const Container = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.gradients.hero};
    color: ${({ theme }) => theme.colors.text};
    z-index: 0;
`

export const LightCurves = styled.div`
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 850px;
    height: 850px;
    pointer-events: none;
    z-index: 1;
    animation: ${float} 10s ease-in-out infinite;

    &::before, &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 40px solid transparent;
        transition: border-color 0.8s ease; 
        filter: blur(40px);
    }

    &::before {
        border-left: 70px solid ${({ theme }) => theme.colors.effectPrimary};
        border-bottom: 30px solid ${({ theme }) => theme.colors.effectTertiary};
        transform: rotate(10deg);
        mix-blend-mode: ${({ theme }) => theme.colors.background === '#f8f8f8' ? 'multiply' : 'screen'};
        opacity: 0.5;
    }

    &::after {
        width: 95%;
        height: 95%;
        top: 1%;
        left: 5%;
        border-left: 40px solid ${({ theme }) => theme.colors.effectSecondary};
        transform: rotate(35deg);
        opacity: 0.3;
    }
`

export const BackgroundBlob = styled.div<BackgroundBlobProps>`
    position: absolute;
    width: 350px;
    height: 550px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.effectSecondary}22 0%, rgba(0,0,0,0) 80%);
    top: ${(props) => props.top || '20%'};
    right: ${(props) => props.right || '10%'};
    filter: blur(50px);
    z-index: 1;
    animation: ${float} 10s infinite reverse ease-in-out;
`

export const FineLine = styled.div`
    position: absolute;
    bottom: -10px;
    left: -60px;
    width: 800px;
    height: 700px;
    border-radius: 100%;
    filter: blur(1px);
    opacity: 0.1;
    
    animation: ${float} 15s infinite ease-in-out;
`

export const Content = styled.div<{$tiltX: number, $tiltY: number, $isMobile: boolean}>`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    transform: ${({ $tiltX, $tiltY, $isMobile }) =>
    $isMobile
      ? "none"
      : `perspective(1000px)
         rotateX(${$tiltY}deg)
         rotateY(${$tiltX}deg)`};

    transition: transform 0.1s ease-out;
    will-change: transform;
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
    text-align: center;

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
