import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AboutDrawing from "../images/about.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faFolderOpen } from "@fortawesome/free-solid-svg-icons"

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
`

const ArtImage = styled.img`
  object-fit: cover;
  min-height: 70%;
  max-width: 70%;
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

const BodyHeading = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 2rem;
`

const BodyText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  max-width: 400px;
`

const BodyLink = styled(Link)`
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
  margin-right: 0.5rem;

  :hover {
    :hover {
      transform: translateY(-3px);
      box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
    }
  }
`

const BodyLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8rem;
`

const Span = styled.span`
  color: rgb(30, 97, 197);
  font-style: italic;
  font-weight: 600;
`

// Skills Section
const Skill = styled.h4`
  text-transform: uppercase;
  color: #333;
  font-family: "Montserrat", sans-serif;
  margin-right: 0.5rem;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const SkillType = styled(Skill)`
  color: rgb(30, 97, 197);
  margin-bottom: 0.4rem;
  font-weight: 700;
`

const SkillWrapper = styled(BodyLinkWrapper)`
  margin-bottom: 1rem;
`

const About = () => {
  return (
    <>
      <Title>About Me.</Title>

      <Wrapper>
        <AboutWrapper>
          <BodyHeading>
            Let me tell you my <Span>story</Span>.
          </BodyHeading>
          <BodyText>
            I am a self taught developer who enjoys building modern, clean, and
            accessible user interfaces for the web and iOS where the user
            experience is a priority.
            <br />
            <br />I have experience creating websites for small businesses using
            modern web technologies such as React, as well as creating iOS
            applications using Swift.
          </BodyText>
          <BodyLinkWrapper>
            <BodyLink>
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "0.5rem" }}
              />
              Resume
            </BodyLink>
            <BodyLink>
              <FontAwesomeIcon
                icon={faFolderOpen}
                style={{ marginRight: "0.5rem" }}
              />
              Projects
            </BodyLink>
          </BodyLinkWrapper>
          <BodyHeading>
            The <Span>tech</Span> I like to use:
          </BodyHeading>
          <SkillType>Web</SkillType>
          <SkillWrapper>
            <Skill>HTML -</Skill>
            <Skill>CSS -</Skill>
            <Skill>Javascript -</Skill>
            <Skill>React -</Skill>
            <Skill>Node -</Skill>
            <Skill>GraphQL</Skill>
          </SkillWrapper>
          <SkillType>Mobile</SkillType>
          <SkillWrapper>
            <Skill>Swift -</Skill>
            <Skill>Flutter</Skill>
          </SkillWrapper>
          <SkillType>Tools</SkillType>
          <SkillWrapper>
            <Skill>Git -</Skill>
            <Skill>AWS -</Skill>
            <Skill>MySQL</Skill>
          </SkillWrapper>
        </AboutWrapper>
        <ArtImage src={AboutDrawing}></ArtImage>
      </Wrapper>
    </>
  )
}

export default About
