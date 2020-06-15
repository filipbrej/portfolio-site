import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  margin-left: 1.8rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
  color: #333;
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
  background-color: rgb(223, 223, 223);
  border-radius: 10px;
  display: block;
  transition: all 0.3s;

  :placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }
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
  background-color: rgb(223, 223, 223);
  margin: 2rem 0rem 1rem 0rem;
  border-radius: 10px;
  height: 200px;
  display: block;

  :placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }
`

const Reminder = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  color: #333;
  margin-left: 1rem;
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
  margin: 1.3rem 0;

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
        <FormGroup>
          <Input required type="text" placeholder="Full Name*"></Input>
          <Label for="name">Full Name*</Label>
        </FormGroup>
        <FormGroup>
          <Input required type="email" placeholder="Email Address*"></Input>
          <Label for="email">Email Address*</Label>
        </FormGroup>
        <FormGroup>
          <MessageBox
            required
            placeholder="Enter your message here*"
          ></MessageBox>
          <Reminder>*required field</Reminder>
        </FormGroup>
        <SubmitButton type="submit">
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ marginRight: "0.5rem" }}
          />
          Submit
        </SubmitButton>
      </Form>
    </>
  )
}

export default Contact
