import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
  }

  state = {
    showToTop: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        this.setState({ showToTop: true })
      } else {
        this.setState({ showToTop: false })
      }
    })
  }

  render() {
    const { location, children } = this.props
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
        <div className="copyright">
          <span>
            COPYRIGHT © 2020 BLACK PAY
          </span>
          <span className="pb">
            Powered by:
          </span>
          {
            this.props.partners
              .filter(elem => elem.node.title == "Powered By")[0]
              .node
              .partnerImages
              .map((image, index) => (<img className="pb-icons" src={image.file.url} key={index}/>))
          }
          </div>
        <div
          className={(this.state.showToTop ? 'visible ' : 'hidden ') + 'toTop '}
          onClick={() =>
            this.top.current.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            })
          }
        >
          <i className="up-arrow"></i>
        </div>
      </Container>
    )
  }
}

export default Template
