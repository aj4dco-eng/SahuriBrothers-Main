import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp'
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeUp',
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible')
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animate scroll-${animation}`}
    >
      {children}
    </div>
  )
}
