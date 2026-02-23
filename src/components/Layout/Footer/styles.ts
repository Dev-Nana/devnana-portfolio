import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  background: #df2a8e;
  padding: 20px 40px;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Left = styled.p`
  font-size: 0.9rem;
`

export const Right = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 1.4rem;
    color: #fff;
    transition: 0.3s;

    &:hover {
      transform: translateY(-4px);
      opacity: 0.8;
    }
  }
`
