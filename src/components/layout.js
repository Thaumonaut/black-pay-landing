import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'

import ToTop from './top-arrow'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
  }

  render() {
    const { location, children, partners } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <div ref={this.top}></div>
        {/* <Navigation image={"Test"} /> */}
        {children}
        {/* copyright section */}
        <div className="copyright">
          <div className="pb">
            <span>
              COPYRIGHT © 2020 BLACK PAY
            </span>
          </div>
          <div className="pb">
            <span>
              Powered by:
            </span>
            {
              partners
                .filter(elem => elem.node.title == "Powered By")[0]
                .node
                .partnerImages
                .map((image, index) => (<img className="pb-icons" src={image.file.url} key={index}/>))
            }
          </div>
          </div>


          {/* 'To Top' Button */}
          <ToTop topRef={this.top} />
      </Container>
    )
  }
}

export default Template
