import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import styled from "styled-components"

const Navigation = styled.nav`
  height: 8vh;
  display: flex;
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  box-shadow: 0px 7px 15px -9px rgba(204, 204, 204, 0.8);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 2;
  align-self: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

const LinkContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    opacity: 1;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0%")};
  }
`

// Icon displays on smaller screens
const Hamburger = styled.div`
  background-color: #000;
  width: 30px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #000;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  /* Top bar of icon */
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  /* Bottom bar of icon */
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <LinkContainer>
          <NavbarLinks />
        </LinkContainer>
      ) : (
        <LinkContainer open>
          <NavbarLinks />
        </LinkContainer>
      )}
    </Navigation>
  )
}

export default Navbar
