import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Img from 'gatsby-image'

export default ({image}) => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
    <p>{image} bloop</p>
  </nav>
)
