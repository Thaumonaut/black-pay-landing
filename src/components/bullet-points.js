import React, {useRef, useEffect, useState} from 'react'
import styles from '../pages/index.module.css'

export default ({points}) => {

  const transitionIn = "fadeInUp"
  const transitionOut = "hidden"

  const [doDelay, setDelay] = useState(true)

  const observer = useRef();

  useEffect(() => {

    const mql = window.matchMedia("(min-width: 1340px)")
    mql.addEventListener("change", (e) => {
      console.log(mql.matches)
      setDelay(mql.matches)
    })

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add(transitionIn)
          entry.target.classList.remove(transitionOut)
        }
      });
    }, {threshold: 0.3 });
  }, [])


  let initArray = function(event) {
    observer.current.observe(event.currentTarget)
  }

  return (
    <div className={styles.bulletPoints}>
    <h2>Why Black Pay?</h2>
    <div className={styles.bulletPointsWrapper}>
      {points.map((point, i) => (
        <div key={i}
          onLoad={(e) => initArray(e)}
          className="animated faster hidden"
          style={{animationDelay: (doDelay ? (i * 100) + "ms" : "250ms")}}
        >
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