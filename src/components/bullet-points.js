import React from 'react'
import styles from '../pages/index.module.css'

export default ({points}) => {

  const transitionIn = "fadeIn"
  const transitionOut = "fadeOut"

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add(transitionIn)
        entry.target.classList.remove(transitionOut)
      } else {
        entry.target.classList.add(transitionOut)
        entry.target.classList.remove(transitionIn)
      }
    });
  }, {threshold: 0.2 });

  let initArray = function(event) {
    observer.observe(event.currentTarget)
  }

  return (
    <div className={styles.bulletPoints}>
    <h2>Why Black Pay?</h2>
    <div className={styles.bulletPointsWrapper}>
      {points.map((point, i) => (
        <div key={i} onLoad={(e) => initArray(e)} className="animated faster">
          <img
            className={styles.bulletPointIcon + " animated faster"}

            src={point.icon.file.url}/>
          <h3>{point.heading}</h3>
          <p>{point.description.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}