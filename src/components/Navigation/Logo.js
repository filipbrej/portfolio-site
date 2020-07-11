import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledLogo = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    color: (30, 97, 197);
  }
  margin-left: 1rem;
`

const Logo = () => {
  return (
    <>
      <StyledLogo to="home" smooth={true} spy={true} duration={500}>
        Filip Brej
      </StyledLogo>
    </>
  )
}

export default Logo
