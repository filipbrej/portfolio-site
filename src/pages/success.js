import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  color: #333;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: #777;
  font-weight: 400;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const ReturnButton = styled(Link)`
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
  border-radius: 25px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  font-size: 1.5rem;
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`
const success = () => {
  return (
    <Wrapper>
      <Title>
        Success! <br /> Your message is on it's way.
      </Title>
      <Subtitle>
        Thank you for reaching out! I'll get back to you as soon as I can.
      </Subtitle>
      <ReturnButton>Return to Home</ReturnButton>
    </Wrapper>
  )
}

export default success
