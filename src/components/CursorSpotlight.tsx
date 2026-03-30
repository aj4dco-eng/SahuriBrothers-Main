import { useEffect } from 'react'
import './CursorSpotlight.css'

export default function CursorSpotlight() {
  useEffect(() => {
    const update = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px')
      document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px')
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return <div className="cursor-spotlight" aria-hidden="true" />
}
