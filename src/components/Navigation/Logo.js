import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLogo = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in-out;
  :hover {
    color: (30, 97, 197);
  }
`

const Logo = () => {
  return (
    <>
      <StyledLogo>Filip Brej</StyledLogo>
    </>
  )
}

export default Logo
