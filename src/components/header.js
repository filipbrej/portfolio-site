import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navigation/Navbar"

const Header = () => (
  <header>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
