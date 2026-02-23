import styled from "styled-components"

export const Card = styled.div`
  background: ${({ theme }) => theme.gradients.cardProject};
  border-radius: 8px;
  border: 1px solid rgb(168, 168, 168);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
  height: 310px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 300px;
  height: 165px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;

    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.backgroundCard},
      transparent
    );
  }
`

export const Content = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 0;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    font-family: var(--font-header);
    margin-bottom: 20px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  font-family: var(--font-header);
`

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = styled.a<ButtonProps>`
  flex: 1;
  font-size: 12px;
  padding: 5px;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.highlight};
  text-decoration: none;
  transition: 0.3s;

  border: 1px solid
    ${({ theme, variant }) => variant === "secondary" ? theme.colors.buttonSecondary : theme.colors.highlight};

  color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.colors.buttonSecondary
      : theme.colors.highlight};

  &:hover {
    background: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.colors.buttonSecondary
      : theme.colors.highlight};

    color: ${({ theme }) => theme.colors.header};
  }
`