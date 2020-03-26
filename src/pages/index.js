import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import styles from './index.module.css'


/* Components */
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import BulletPoint from '../components/bullet-points'
import FeaturePanel from '../components/feature-panel'
import PartnerList from '../components/partners-list'
import SignupForm from '../components/signup-form'



class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.forms = React.createRef()
  }

  scrollToElement() {
    //console.log(this.forms.current);
    this.forms.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const testQuery = get(this, 'props.data.contentfulAsset')
    const hero = get(this, 'props.data.contentfulHeroSection')

    const bulletPoints = get(this, 'props.data.contentfulFeatureList.bulletPoint')
    const partners = get(this, 'props.data.allContentfulPartnersList.edges')
    const panels = get(this, 'props.data.allContentfulFeaturePanel.edges')

    return (
      <Layout location={this.props.location} partners={partners}>
        <div>
          <Helmet title={siteTitle}/>
          <Hero
            data={hero}
            img={testQuery.fluid}
            scrollTo={() => this.scrollToElement()}
          />
          <BulletPoint points={bulletPoints} />
          <PartnerList partners={partners} />
          <FeaturePanel panels={panels} />
          <SignupForm ref={this.forms} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql `
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    contentfulHeroSection {
      heading
      heroImage {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      subHeading
    }

    contentfulAsset(contentful_id: { eq: "24qiOp5FdnMYUMA7ACzwA4" }) {
      id
      title
      fluid {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }

    allContentfulFeaturePanel {
      edges {
        node {
          title
          description {
            description
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }

    allContentfulPartnersList {
    edges {
      node {
        title
        partnerImages {
          title
          file {
            url
          }

        }
      }
    }
  }

    contentfulFeatureList {
      bulletPoint {
        heading
        icon {
          file {
            url
          }
        }
        description {
          description
        }
      }
    }
  }
`
