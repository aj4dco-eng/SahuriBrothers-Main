import { useRef, MouseEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function TiltCard({ children, className = '', intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(6px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.2s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
