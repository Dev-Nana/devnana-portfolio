import styled from "styled-components"

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.3s ease;
  position: relative;
`

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2<{ $visible: boolean }>`
  font-size: 32px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
  $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 4s ease;

  will-change: transform, opacity;
`

export const Description = styled.p<{ $visible: boolean }>`
  font-size: 16px;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 40px auto;
  color: ${({ theme }) => theme.colors.text};

  opacity: ${({ $visible }) => ($visible ? 0.8 : 0)};
  transform: ${({ $visible }) =>
  $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 4s ease;

  will-change: transform, opacity;
`

export const Subtitle = styled.h3<{ $visible: boolean }>`
  font-size: 24px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
  $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 4s ease;

  will-change: transform, opacity;
`

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`

export const Skill = styled.span<{ $visible: boolean }>`
transition: all 0.8s ease;
display: flex;
align-items: center;
gap: 10px;
padding: 10px 20px;
border-radius: 999px;
font-family: "Open Sans", sans-serif;
font-size: 14.4px;
font-weight: 500;
background: #df2a8e;
color: white;

&:hover {
  transform: translateY(-5px) scale(1.05);
}

&:hover svg {
  transform: rotate(10deg) scale(1.2);
  transition: transform 0.5s ease;
}

opacity: ${({ $visible }) => ($visible ? 1 : 0)};
transform: ${({ $visible }) =>
$visible ? "translateY(0)" : "translateY(20px)"};
    
`
