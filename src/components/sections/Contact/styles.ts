import styled from "styled-components"

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.gradients.footer};
  transition: background 0.6s ease;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Container = styled.div`
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
`

export const Header = styled.div<{ $visible: boolean }>`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    font-family: var(--font-body);
    color: ${({ theme }) => theme.colors.text};
    }
    
  p {
    max-width: 600px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    line-height: 1.6;
  }

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
  $visible ? "translateY(0)" : "translateY(30px)"};

  transition: all 0.6s ease;
`

export const FormWrapper = styled.div<{ $visible: boolean }>`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  font-family: var(--font-header);
  background: ${({ theme }) => `${theme.colors.backgroundForm}`};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => `${theme.colors.header}20`};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  h3 {
    margin-bottom: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(30px)"};

  transition: all 0.6s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: radial-gradient(
      300px circle at var(--x) var(--y),
      ${({ theme }) => `${theme.colors.highlight}15`},
      transparent 70%
    );

    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Field = styled.div<{ $error?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    gap: 10px;
  }
input,
textarea {
  padding: 12px 16px;
  border-radius: 10px;

  border: 1px solid
    ${({ theme, $error }) =>
      $error ? "#ff4d4f" : `${theme.colors.text}20`};

  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? "#ff4d4f" : theme.colors.highlight};

    box-shadow: 0 0 0 2px
      ${({ theme, $error }) =>
        $error ? "#ff4d4f30" : `${theme.colors.highlight}30`};
  }
}

  textarea {
    resize: none;
  }
    
    span {
    font-size: 14px;
    color: #ff4d4f;
    margin-top: 4px;
    display: block;
    }
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background: #df2a8e;
  color: #fff;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export const Success = styled.p`
  margin-top: 15px;
  color: #4caf50;
  font-weight: 500;
`

export const Error = styled.p`
  margin-top: 15px;
  color: #ff4d4f;
  font-weight: 500;
`

export const SuccessScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 40px 20px;

  p {
    font-weight: 500;
  }
`

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #df2a8e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
`




