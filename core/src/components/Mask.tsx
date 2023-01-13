import React from 'react'

export interface MaskProps {
  id: string
  contain: boolean
}

export const Mask = ({ id, contain }: MaskProps) => {
  return (
    <mask id={id}>
      {contain ? (
        <circle cx="500" cy="500" r="500" fill="#fff"></circle>
      ) : (
        <path
          d="M1000,0H0V718.31H179.2c38.38,142.38,167.45,247.1,320.8,247.1s282.42-104.72,320.8-247.1H1000Z"
          fill="white"
        />
      )}
    </mask>
  )
}
