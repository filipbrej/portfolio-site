import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

// Images
import VillainCuts from "../images/projects/villain-cuts.jpg"
import GitHubFollowers from "../images/projects/github-follower.jpg"
import Minutap from "../images/projects/minutap-app.jpg"
import CHD from "../images/projects/CHD.jpg"
import BreakingBad from "../images/projects/breaking-bad.jpg"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GridWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3rem;
  position: relative;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem;
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
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
const Span = styled.span`
  font-weight: 600;
  color: rgb(30, 97, 197);
  font-style: italic;
`

const ProjectCard = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  min-height: 56vh;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(191, 191, 191, 0.5);

  @media (min-width: 1800px) {
    min-height: 35vh;
  }
`
const ProjectName = styled.h3`
  font-family: "Montserrat", sans-serif;
  margin: 1rem 0 0 1rem;
`
const ProjectImage = styled.img`
  object-fit: cover;
  max-height: 200px;
  width: 100%;
  height: auto;
  display: block;
`
const ProjectLink = styled.a`
  background: linear-gradient(
    45deg,
    rgba(0, 58, 112, 1) 0%,
    rgba(89, 160, 235, 1) 100%
  );
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  text-decoration: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin-right: 0.5rem;
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 0.2rem 1rem;
`

const SkillWrapper = styled(LinkWrapper)``

const Skill = styled.h5`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-right: 0.3rem;
  background-color: rgb(223, 223, 223);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 1rem 1rem;
`

const Footer = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  margin-bottom: 7rem;
  font-weight: 300;

  @media (max-width: 786px) {
    font-size: 1.1rem;
  }
`

const FooterLink = styled.a`
  font-weight: 500;
  color: rgb(30, 97, 197);
  text-decoration: underline;
  cursor: pointer;
`

const Projects = ({ id }) => {
  return (
    <Wrapper id={id}>
      <Title>Projects.</Title>
      <Heading>
        Here's what I've been <Span>working</Span> on.
      </Heading>
      <GridWrapper>
        <ProjectCard>
          <ProjectImage src={VillainCuts} />
          <ProjectName>Villain Cuts Website</ProjectName>
          <SkillWrapper>
            <Skill>React</Skill>
            <Skill>MaterialUI</Skill>
          </SkillWrapper>
          <LinkWrapper>
            <ProjectLink href="https://www.villaincuts.com" target="_blank">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ marginRight: "0.5rem" }}
              />
              Demo
            </ProjectLink>
            <ProjectLink>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "0.5rem" }}
              />
              Source Code
            </ProjectLink>
          </LinkWrapper>
          <ProjectDescription>
            A website for a small business built with React where users can
            contact the hair stylist for an appointment and learn more about the
            business. MaterialUI, a React design library, was used to give the
            website a consistent, attractive theme.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={BreakingBad} />
          <ProjectName>Breaking Bad Character Viewer</ProjectName>
          <SkillWrapper>
            <Skill>React</Skill>
            <Skill>Styled-Components</Skill>
          </SkillWrapper>
          <LinkWrapper>
            <ProjectLink
              href="https://breaking-bad-cast-viewer.netlify.app/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ marginRight: "0.5rem" }}
              />
              Demo
            </ProjectLink>
            <ProjectLink
              href="https://github.com/filipbrej/breaking-bad-react"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "0.5rem" }}
              />
              Source Code
            </ProjectLink>
          </LinkWrapper>
          <ProjectDescription>
            A website where you can view the characters from the show Breaking
            Bad and see each of their information such as the actor they're
            portrayed by, birthday, and nickname. The app uses the Breaking Bad
            API to fetch information and the styled-components package was used
            to style the app.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={GitHubFollowers} />
          <ProjectName>GitHub Followers</ProjectName>
          <SkillWrapper>
            <Skill>Swift</Skill>
          </SkillWrapper>
          <LinkWrapper>
            <ProjectLink
              href="https://github.com/filipbrej/gh-followers"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "0.5rem" }}
              />
              Source Code
            </ProjectLink>
          </LinkWrapper>
          <ProjectDescription>
            An iOS application built using Swift as part of an iOS course by
            Sean Allen. The app allows the user to seach a GitHub account's
            follower list and get more information about the follower such as
            the amount of repositories, their follower list, and go to their
            profile. The app uses the GitHub API to fetch user data.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={Minutap} />
          <ProjectName>Minutap</ProjectName>
          <SkillWrapper>
            <Skill>Swift</Skill>
          </SkillWrapper>
          <LinkWrapper>
            <ProjectLink
              href="https://github.com/filipbrej/minutap"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "0.5rem" }}
              />
              Source Code
            </ProjectLink>
          </LinkWrapper>
          <ProjectDescription>
            An iOS game built using Swift. Users press a button as many times as
            they can in a minute and try to achieve a high score. The UI was
            built programmatically with Swift. UserDefaults was used to keep
            track of the high score even when the user exited the app.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={CHD} />
          <ProjectName>Intertek Choking Hazard Form</ProjectName>
          <SkillWrapper>
            <Skill>Swift</Skill>
          </SkillWrapper>
          <LinkWrapper>
            <ProjectLink
              href="https://github.com/filipbrej/CHD"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "0.5rem" }}
              />
              Source Code
            </ProjectLink>
          </LinkWrapper>
          <ProjectDescription>
            An iOS application built for medical professionals to log incidents
            with consumer products involving children. I designed the initial UI
            in Xcode using UIKit to streamline the user experience, and
            implemented the camera feature and speech-to-text conversion using
            Apple's Speech API.
          </ProjectDescription>
        </ProjectCard>
      </GridWrapper>
      <Footer>
        More projects available on my{" "}
        <FooterLink href="https://github.com/filipbrej" target="_blank">
          GitHub
        </FooterLink>{" "}
        page.
      </Footer>
    </Wrapper>
  )
}

export default Projects
