import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { animated, config, useTransition } from "react-spring"

const words = [
  {
    id: 0,
    text: "innovative",
  },
  {
    id: 1,
    text: "responsive",
  },
  {
    id: 2,
    text: "accessible",
  },
]

const Wrapper = styled.div`
  font-weight: 600;
  font-style: italic;
  color: rgb(30, 97, 197);
  width: 132px;
  position: relative;
  display: inline-block;
  text-align: center;
  transition: 0.2s color ease-out;

  &span {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 107px;
  }

  @media (min-width: 1800px) {
    width: 265px;
  }
`

const WordRoulette = () => {
  const [index, setIndex] = useState(0)
  const wordTransition = useTransition(words[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: "translateY(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: "translate(0px)",
    },
    leave: {
      opacity: 0,
      transform: "translate(-10px)",
    },
  })
  useEffect(
    () =>
      void setInterval(
        () => setIndex(current => (current + 1) % words.length),
        2500
      ),
    []
  )
  return (
    <Wrapper>
      <i style={{ visibility: "hidden" }}>innovative</i>
      {wordTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Wrapper>
  )
}

export default WordRoulette
