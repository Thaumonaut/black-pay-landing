import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'

class Template extends React.Component {
  render() {
    const {location, children} = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        {/* <Navigation image={"Test"} /> */}
        {children}
        <div style={{width: "100vw", textAlign: "center"}}>Copywrite © 2020 Black Pay</div>
      </Container>
    )
  }
}

export default Template
