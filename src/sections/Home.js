import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faAngellist,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { useSpring, animated, config } from "react-spring"

// Components
import WordRoulette from "../components/UI/WordRoulette"

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  color: #333;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
  }
`
const Title = styled(animated.h1)`
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: -2px;

  @media (min-width: 1800px) {
    font-size: 7rem;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const TitleSpan = styled.span`
  color: rgb(30, 97, 197);
  font-weight: 600;
`
const Subtitle = styled(animated.h2)`
  font-size: 1.5rem;
  margin: 2rem 0;
  font-weight: 400;

  @media (min-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const SubtitleSpan = styled.span`
  font-style: italic;
  font-weight: 600;
  color: rgb(30, 97, 197);
`

const LinkWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
`

const PageLink = styled.a`
  padding: 0.5rem 1rem;
  background: linear-gradient(
    45deg,
    rgba(0, 58, 112, 1) 0%,
    rgba(89, 160, 235, 1) 100%
  );
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  border-radius: 70px;
  text-decoration: none;
  color: #fff;
  font-size: 3rem;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const CaretDown = styled(Link)`
  text-decoration: none;
  color: rgb(30, 97, 197);
`

const ScrollDown = styled(animated.div)`
  font-size: 2.2rem;
  color: rgb(30, 97, 197);
  position: absolute;
  align-items: center;
  bottom: 50px;
  cursor: pointer;

  @media (max-width: 500px) {
    visibility: hidden;
  }
`

const Home = ({ id }) => {
  // Animation for title
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 250,
    opacity: 1,
    transform: "translateX(0rem)",
    from: { opacity: 0, transform: "translateX(3rem)" },
  })

  // Animation for subtitle
  const SubtitleSpring = useSpring({
    config: config.stiff,
    delay: 400,
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(2rem)" },
  })

  // Animation for subtitle
  const PageLinkSpring = useSpring({
    config: config.wobbly,
    delay: 400,
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(2rem)" },
  })

  // Button to scroll to about section
  const CaretSpring = useSpring({
    config: config.stiff,
    delay: 1200,
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(5rem)" },
  })

  return (
    <Wrapper id={id}>
      <TextWrapper>
        <Title style={TitleSpring}>
          Hello! 👋🏼 <br /> I'm <TitleSpan>Fil.</TitleSpan>
        </Title>
        <Subtitle style={SubtitleSpring}>
          I build <WordRoulette /> apps for iOS and the web.
        </Subtitle>
        <LinkWrapper style={PageLinkSpring}>
          <PageLink href="https://www.github.com/filipbrej/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </PageLink>
          <PageLink
            href="https://www.linkedin.com/in/filipbrej/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </PageLink>
          <PageLink href="https://angel.co/u/filip-brej" target="_blank">
            <FontAwesomeIcon icon={faAngellist} />
          </PageLink>
        </LinkWrapper>
      </TextWrapper>
      <Link>
        <ScrollDown style={CaretSpring}>
          <CaretDown
            to="projects"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </CaretDown>
        </ScrollDown>
      </Link>
    </Wrapper>
  )
}

export default Home
