import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

import styles from './hero.module.css'

export default ({ data, img, scrollTo }, props) => (
  <div className={styles.hero}>
    <Img fluid={img} className={styles.logo} />
    <div className={styles.container}>
      <Img
        className={styles.heroImage}
        alt={data.heroImage.title}
        objectFit="contain"
        fluid={data.heroImage.fluid}
      />
      <div className={styles.heroDetails}>
        <h1 className={styles.heroHeadline}>{data.heading}</h1>
        <h3 className={styles.heroTitle}>{data.subHeading}</h3>
        <button className={styles.button} onClick={() => scrollTo()}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
)
