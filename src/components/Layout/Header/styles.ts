import styled from "styled-components"
import { keyframes } from "styled-components"

const fadeRotate = keyframes`
    from {
      opacity: 0;
      transform: rotate(-90deg) scale(0.5);
    }
    to {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
`

export const AnimatedIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeRotate} 0.3s ease;
`

export const Container = styled.header<{ $scrolled: boolean }>`
    width: 100%;
    height: ${({ $scrolled }) => ($scrolled ? "60px" : "80px")};
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.header};
    position: fixed;
    top: 0;
    z-index: 10;
    font-family: var(--font-header);
    transition: height 0.3s ease, box-shadow 0.3s ease;
    
    box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"};
`

export const Logo = styled.h1`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`

export const DesktopNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
      display: flex;
      gap: 40px;
    }

    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
      font-size: 15px;
      transition: color 0.2s ease, text-decoration 0.2s ease;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
    }

    .active {
      color: #df2a8e;
    }

    .active:hover{
      text-decoration: none;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: rotate(20deg) scale(1.1);
    }
`

export const MobileMenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};

    @media (min-width: 768px) {
      display: none;
    }
`

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.header};
    display: flex;
    flex-direction: column;
    padding: 80px 24px;
    gap: 24px;
    transition: right 0.3s ease;
    z-index: 20;

    a {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
`

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 15;
`
