import styled from "styled-components"

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.gradients.hero};
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    font-family: var(--font-body);
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`


