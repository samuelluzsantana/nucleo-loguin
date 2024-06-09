import React from 'react'

interface ASquaresProps {
  width?: number
  height?: number
  className?: string
}

export const ASquares: React.FC<ASquaresProps> = ({ className, height = 186 }) => {
  return (
    <div className={className}>
      <svg
        width='186'
        height={height}
        viewBox='0 0 186 186'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='69.6116'
          y='-8'
          width='146.86'
          height='146.86'
          rx='22.1175'
          transform='rotate(31.9024 69.6116 -8)'
          fill='#B21B2C'
        />
      </svg>
    </div>
  )
}
