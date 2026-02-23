import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

export const Header = styled.div`
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
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 28px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  /* Borda gradiente elegante */
  border: 1px solid transparent;
  background-clip: padding-box;
  
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
    font-size: 14.4px;
    opacity: 0.6;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    opacity: 0.8;
    line-height: 1.5;
  }
`

export const Icon = styled.div`
  min-width: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.highlight};
`
