import styled from "styled-components"

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.3s ease;
`

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 40px auto;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`

export const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.text};
`

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const Skill = styled.span`
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
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`
