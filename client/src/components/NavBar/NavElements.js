import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { HiMenu, HiXCircle } from "react-icons/hi";

export const MyHiMenu = styled(HiMenu)`
  display:none;
  @media (max-width:720px){
    display:${({ open }) => open ? 'none' : 'unset'};
  }
`;

export const MyHiXCircle = styled(HiXCircle)`
  display:none;
  z-index:2;
  @media (max-width:720px){
    display:${({ open }) => open ? 'unset' : 'none'};
  }
`;

export const Nav = styled.nav`
  background: var(--bg);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 8.5%;
  z-index: 10;
`;

export const NavMenu = styled.div`
  font-family: "Montserrat";
  font-size: 1.2vw;
  display: flex;
  align-items: end;  
  justify-content: center;
  @media (max-width: 720px) {   
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    flex-direction: column;
    width: 50vw;
    height: 100vh;
    background-color: var(--bg);
    font-size: 1.2rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translate(100%)'};
  }
`;

export const NavLink = styled(Link)`
  color: var(--text-primary);
  align-self: center;
  text-decoration: none;
  padding: 1rem 1rem;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

export const NavBtnLink = styled(Link)`
  background: var(--bg);
  color: var(--primary-color);
  font-family: "Montserrat";
  font-size: 1.5vw;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--secondary-color);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width:720px){
    display: none;
  }
`;
