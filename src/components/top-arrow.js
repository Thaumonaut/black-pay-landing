import React, {useState, useEffect} from 'react'

export default ({topRef}) => {

  const [showToTop, setToTop] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        setToTop(true)
      } else {
        setToTop(false)
      }
    })
  }, [])

  return (
    <div
      className={(showToTop ? 'visible ' : 'hidden ') + 'toTop '}
      onClick={() =>
        topRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      }
    >
      <i className="up-arrow"></i>
    </div>
  )
}