import React from "react"
import styled from "styled-components"
import AboutDrawing from "../images/about.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileWord } from "@fortawesome/free-solid-svg-icons"
import Resume from "../static/Resume.pdf"

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1700px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 1700px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`

const ArtImage = styled.img`
  object-fit: cover;
  min-height: 50%;
  max-width: 70%;
  margin-bottom: 5rem;
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  color: #333;

  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`

const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 500px) {
    font-size: 1.6rem;
    margin-right: 1rem;
  }
`

const BodyText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  max-width: 400px;

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`

const BodyLink = styled.a`
  background: linear-gradient(
    45deg,
    rgba(0, 58, 112, 1) 0%,
    rgba(89, 160, 235, 1) 100%
  );
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  text-decoration: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin-right: 0.7rem;

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }

  @media (max-width: 1700px) {
    margin-bottom: 0.7rem;
  }
`

const BodyLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
`

const Span = styled.span`
  color: rgb(30, 97, 197);
  font-style: italic;
  font-weight: 600;
`

// Skills Section
const Skill = styled.h4`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  background-color: rgb(223, 223, 223);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
`

const SkillType = styled(Skill)`
  color: rgb(30, 97, 197);
  margin-bottom: 0.4rem;
  font-weight: 700;
  background-color: transparent;
  padding: 0;
`

const SkillWrapper = styled(BodyLinkWrapper)`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1700px) {
    justify-content: center;
    flex-direction: row;
  }
`

const About = ({ id }) => {
  return (
    <>
      <Title>About Me.</Title>
      <Wrapper id={id}>
        <AboutWrapper>
          <Heading>
            Let me tell you my <Span>story</Span>.
          </Heading>
          <BodyText>
            I am a software developer who enjoys building modern, clean, and
            accessible applications for the web and iOS.
            <br />
            <br />I have experience creating websites for small businesses using
            modern web technologies such as React, as well as creating iOS
            applications using Swift at larger companies.
          </BodyText>
          <BodyLinkWrapper>
            <BodyLink href={Resume} target="_blank">
              <FontAwesomeIcon
                icon={faFileWord}
                style={{ marginRight: "0.5rem" }}
              />
              View Resume
            </BodyLink>
          </BodyLinkWrapper>
          <Heading>
            The <Span>tech</Span> I like to use:
          </Heading>
          <SkillType>Web</SkillType>
          <SkillWrapper>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Javascript</Skill>
            <Skill>React</Skill>
            <Skill>Gatsby</Skill>
            <Skill>Node</Skill>
            <Skill>Sass</Skill>
            <Skill>GraphQL</Skill>
            <Skill>SQL</Skill>
          </SkillWrapper>
          <SkillType>Mobile</SkillType>
          <SkillWrapper>
            <Skill>Swift</Skill>
            <Skill>React Native</Skill>
          </SkillWrapper>
          <SkillType>Tools</SkillType>
          <SkillWrapper>
            <Skill>Git</Skill>
            <Skill>AWS</Skill>
            <Skill>Firebase</Skill>
            <Skill>PostgreSQL</Skill>
          </SkillWrapper>
        </AboutWrapper>
        <ArtImage src={AboutDrawing}></ArtImage>
      </Wrapper>
    </>
  )
}

export default About
