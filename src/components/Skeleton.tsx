import './Skeleton.css'

interface Props {
  width?: string
  height?: string
  borderRadius?: string
  className?: string
}

export default function Skeleton({
  width = '100%',
  height = '200px',
  borderRadius = '4px',
  className = '',
}: Props) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  )
}
