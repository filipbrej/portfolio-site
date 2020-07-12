import React, { useState } from "react"
// import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import styled from "styled-components"
import { useSpring, config, animated } from "react-spring"
import { Link } from "react-scroll"

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
const LogoContainer = styled(animated.div)`
  display: flex;
  height: 100%;
  align-items: center;
`

const LinkContainer = styled(animated.div)`
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
    left: ${({ open }) => (open ? "-100%" : "0%")};
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
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "inherit")};

  /* Top and bottom of menu bar */
  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #000;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  /* Top bar of menu */
  ::before {
    transform: ${({ open }) =>
      open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  /* Bottom bar of menu */
  ::after {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0deg)")};
    top: 10px;
  }
`

const StyledLink = styled(Link)`
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

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  // Animation for navbar
  const NavSpring = useSpring({
    config: config.wobbly,
    delay: 100,
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(-1rem)" },
  })

  return (
    <Navigation>
      <LogoContainer style={NavSpring}>
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
          <StyledLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Home
          </StyledLink>
          <StyledLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Projects
          </StyledLink>
          <StyledLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            About
          </StyledLink>
          <StyledLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Contact
          </StyledLink>
        </LinkContainer>
      ) : (
        <LinkContainer open style={NavSpring}>
          <StyledLink to="home" spy={true} smooth={true} duration={500}>
            Home
          </StyledLink>
          <StyledLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Projects
          </StyledLink>
          <StyledLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            About
          </StyledLink>
          <StyledLink to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </StyledLink>
        </LinkContainer>
      )}
    </Navigation>
  )
}

export default Navbar
