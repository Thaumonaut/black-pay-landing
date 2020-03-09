import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import styles from './index.module.css'

class RootIndex extends React.Component {

  constructor(props) {
    super(props);
    this.forms = React.createRef();
  }

  scrollToElement() {
    this
      .forms
      .current
      .scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const testQuery = get(this, 'props.data.contentfulAsset')
    const hero = get(this, 'props.data.contentfulHeroSection')

    const bulletPoints = get(this, 'props.data.contentfulFeatureList.bulletPoint')
    const partners = get(this, 'props.data.contentfulPartnersList.partnerImages')
    const panels = get(this, 'props.data.allContentfulFeaturePanel.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle}/>
          <Hero data={hero} img={testQuery.fluid} scrollTo={() => this.scrollToElement()}/> {/* Move to Components later */}

          {/* Bullet Points */}
          <div className={styles.bulletPoints}>
            <h2>Why Black Pay?</h2>
            <div className={styles.bulletPointsWrapper}>
              {bulletPoints.map((point, i) => (
                <div key={i}>
                  <img
                    src={point.icon.file.url}
                    style={{
                    maxWidth: "100px"
                  }}/>
                  <h3>{point.heading}</h3>
                  <p>{point.description.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner List */}
          <div className={styles.partnerList}>
            <h2>Our Partners</h2>
            <div className={styles.listContainer}>
              {partners.map((p, i) => (<img src={p.file.url} key={i}/>))}
            </div>
          </div>

          {/* Feature Panels */}
          {panels.map(({
            node
          }, i) => (
              <div 
                id="panel" key={i}
                className={styles.panelContainer}
              >
              <div className={styles.panelImage}>
                <Img fluid={node.image.fluid}/>
              </div>
              <div className={styles.panelText}>
                <h2>{node.title}</h2>
                <p>{node.description.description}</p>
              </div>
            </div>
            ))}
          
          <div className={styles.formsWrapper} ref={this.forms}>
            <h2>Coming Soon!</h2>
          </div>
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
        fluid(
          maxHeight: 900
          ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      subHeading
    }

    contentfulAsset(contentful_id: {eq: "24qiOp5FdnMYUMA7ACzwA4"}) {
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

    contentfulPartnersList {
      partnerImages {
        file {
          url
          fileName
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
