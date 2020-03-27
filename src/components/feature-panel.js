import React, {useRef, useEffect} from 'react'
import Img from 'gatsby-image'
import styles from '../pages/index.module.css'

export default ({panels}) => {

  const observer = useRef();

  useEffect(() => {

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("fadeInLeft")
        }
      });
    }, {threshold: 0.5 });
  }, [])

  let initArray = function(event) {
    observer.current.observe(event.currentTarget)
  }

  return (
    <div>
      {panels.map(({node}, i) => (
        <div id="panel" key={i}
          className={styles.panelContainer + " animated hidden"}
          onLoad={(e) => initArray(e)}>
          <div className={styles.panelImage}>
            <Img className={styles.Image} fluid={node.image.fluid}/>
          </div>
          <div className={styles.panelText}>
            <h2>{node.title}</h2>
            <p>{node.description.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}