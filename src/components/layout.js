import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

// Layout sections
import Header from "./header"
import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>
        <GlobalStyle />
        <Header />
        <Home id="home" />
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
