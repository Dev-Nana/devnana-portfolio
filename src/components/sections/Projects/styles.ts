import styled from "styled-components"

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.gradients.hero};
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Header = styled.div<{ $visible: boolean }>`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(30px)"};

  transition: all 0.6s ease;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    line-height: 1.6;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 300px));
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1320px;
`
export const CardWrapper = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};

  transition: all 0.6s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`
export const ViewAllButton = styled.div`
  margin-top: 30px;
  display: inline-block;
  font-weight: 500;
  text-decoration: none;

  color: white;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 45, 141, 0.3);
  }

  padding: 14px 28px;
  background: #df2a8e;
  border: none;
  border-radius: 8px;
  font-family: var(--font-header);
  font-size: 14.4px;
  cursor: pointer;

`