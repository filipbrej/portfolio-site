import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faAngellist,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

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
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-bottom: 15rem;
  }
`
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const TitleSpan = styled.span`
  color: rgb(30, 97, 197);
  font-weight: 600;
`
const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0;
  font-weight: 400;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const SubtitleSpan = styled.span`
  font-style: italic;
  font-weight: 600;
  color: rgb(30, 97, 197);
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled(Link)`
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

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(30, 97, 197);
`

const ScrollDown = styled.div`
  font-size: 3rem;
  color: rgb(30, 97, 197);
  position: absolute;
  bottom: 50px;
`

const Home = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          Hello! 👋🏼 <br /> I'm <TitleSpan>Fil.</TitleSpan>
        </Title>
        <Subtitle>
          I build <SubtitleSpan>innovative</SubtitleSpan> apps for iOS and the
          web.
        </Subtitle>
        <ButtonWrapper>
          <Button>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faAngellist} />
          </Button>
        </ButtonWrapper>
      </TextWrapper>
      <ScrollDown>
        <StyledLink>
          <FontAwesomeIcon icon={faChevronDown} />
        </StyledLink>
      </ScrollDown>
    </Wrapper>
  )
}

export default Home
