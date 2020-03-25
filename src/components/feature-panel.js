import React from 'react'
import Img from 'gatsby-image'
import styles from '../pages/index.module.css'

export default ({panels}) => (
  <>
    {panels.map(({node}, i) => (
      <div id="panel" key={i} className={styles.panelContainer}>
        <div className={styles.panelImage}>
          <Img className={styles.Image} fluid={node.image.fluid}/>
        </div>
        <div className={styles.panelText}>
          <h2>{node.title}</h2>
          <p>{node.description.description}</p>
        </div>
      </div>
    ))}
  </>
)