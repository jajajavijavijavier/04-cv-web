import { useEffect, useState } from 'react'

export function IntersectionObserverComponent () {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true)
          entry.target.classList.add('show')
        } else {
          setShow(false)
          entry.target.classList.remove('show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
    }
  }, [])
  return null
}
