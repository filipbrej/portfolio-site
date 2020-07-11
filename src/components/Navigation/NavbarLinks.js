import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #444;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    color: rgb(30, 97, 197);
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 5;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="home" smooth={true} spy={true}>
        Home
      </NavItem>
      <NavItem to="projects" smooth={true} spy={true} offset={-100}>
        Projects
      </NavItem>
      <NavItem to="about" smooth={true} spy={true} offset={-200}>
        About
      </NavItem>
      <NavItem to="contact" smooth={true} spy={true}>
        Contact
      </NavItem>
    </>
  )
}

export default NavbarLinks
