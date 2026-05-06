import styled from "styled-components"

export const Section = styled.section`
  padding: 160px 24px;
  background: ${({ theme }) => theme.gradients.hero};
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Hero = styled.div`
  text-align: center;
  margin-bottom: 120px;

  span {
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 600;
    display: block;
    margin-bottom: 16px;
  }

  h1 {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    max-width: 540px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.8;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px; 
`

export const Project = styled.article<{ $reverse: boolean, $visible: boolean, $delay: number }>`
  display: flex;
  gap: 80px;
  align-items: center;
  position: relative;
  padding: 40px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.backgroundForm};
  border: ${({ theme }) => theme.colors.backgroundShadow} 1px solid;
  backdrop-filter: blur(20px);

  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible, $reverse }) =>
      $visible
        ? "translateX(0)"
        : $reverse
          ? "translateX(80px)"
          : "translateX(-80px)"};

  transition: 
    opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1);

  transition-delay: ${({ $delay }) => $delay * 0.4}s;
  will-change: transform, opacity;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    padding: 24px;
  }

  
  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 24px;
    padding: 1px; 
    background: radial-gradient(
        400px circle at var(--x) var(--y),
        ${({ theme }) => `${theme.colors.highlight}40`},
        transparent 60%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`

export const ImageWrapper = styled.div`
  flex: 1.2; 
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  aspect-ratio: 16 / 10;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10, 10, 12, 0.7), transparent 50%);
    transition: opacity 0.8s;
  }

  &:hover img {
    transform: scale(1.04);
  }
`

export const ProjectIndex = styled.span`
  font-family: monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.highlight};
  opacity: 0.5;
  display: block;
  margin-bottom: 8px;
  letter-spacing: 0.1em;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.7;
    margin-bottom: 32px;
  }
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  span {
    font-size: 12px;
    padding: 4px 12px;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.backgroundShadow};
    border: ${({ theme }) => theme.colors.backgroundShadow} 1px solid;
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 500;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 16px;

  a {
    padding: 10px 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    
    
    background: ${({ theme }) => theme.colors.backgroundShadow};
    border: ${({ theme }) => theme.colors.backgroundShadow} 1px solid;
    color: ${({ theme }) => theme.colors.highlight};
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

    svg {
      font-size: 16px;
      transition: transform 0.8s;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.highlight};
      background: ${({ theme }) => `${theme.colors.highlight}10`};
      color: ${({ theme }) => theme.colors.highlight};
      transform: translateY(-2px);
      box-shadow: 0 12px 30px ${({ theme }) => `${theme.colors.highlight}15`};

      svg {
        transform: rotate(15deg) scale(1.1);
      }
    }
  }
`