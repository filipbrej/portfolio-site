import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  color: #333;
`

const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  width: 100%;
`

const Span = styled.span`
  font-weight: 600;
  color: rgb(30, 97, 197);
  font-style: italic;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2rem auto;
  width: 30%;
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  border: 1px solid rgba(191, 191, 191, 0.5);

  @media (max-width: 1440px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`
const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
  padding: 0.7rem;
  border: none;
  resize: none;
  margin: 2rem 1rem 0 1rem;
  color: #333;
  background-color: lightgray;
  border-radius: 10px;
`
const Label = styled.label`
  font-family: "Montserrat", sans-serif;
`
const MessageBox = styled.textarea`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
  padding: 0.7rem;
  border: none;
  resize: none;
  color: #333;
  background-color: lightgray;
  margin: 2rem 1rem 1.5rem 1rem;
  border-radius: 10px;
  height: 200px;
  width: 80%;
`

const SubmitButton = styled.button`
  background: linear-gradient(
    45deg,
    rgba(0, 58, 112, 1) 0%,
    rgba(89, 160, 235, 1) 100%
  );
  box-shadow: -5px 13px 35px -9px rgba(130, 130, 130, 0.5);
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 1.3rem;

  :hover {
    transform: translateY(-3px);
    box-shadow: -5px 13px 35px -5px rgba(130, 130, 130, 0.5);
  }
`

const Contact = () => {
  return (
    <>
      <Title>Contact.</Title>
      <Heading>
        Let's work <Span>together</Span>.
      </Heading>

      <Form>
        <Input placeholder="Full Name"></Input>
        <Input placeholder="Email Address"></Input>
        <MessageBox></MessageBox>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default Contact
