import React from 'react'
import styles from '../pages/index.module.css'

export default ({partners}) => (
  <div className={styles.partnerList}>
    <h2>Our Partners</h2>
    <div className={styles.listContainer}>
      {
        partners
        .filter(elem => elem.node.title == "Current Partners")[0]
        .node
        .partnerImages
        .map((image, index) => (<img src={image.file.url} key={index}/>))
      }
    </div>
  </div>
)