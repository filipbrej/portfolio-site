import React from "react"
import { Link } from "gatsby"
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
      <NavItem to="/">About</NavItem>
      <NavItem to="/">Skills</NavItem>
      <NavItem to="/">Projects</NavItem>
      <NavItem to="/">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
