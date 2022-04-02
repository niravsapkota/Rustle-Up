import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: var(--bg);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 8.5%;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: var(--text-primary);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

export const NavMenu = styled.div`
  font-family: "Montserrat";
  font-size: 1.2vw;
  display: flex;
  align-items: center;  
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
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