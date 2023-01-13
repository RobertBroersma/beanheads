import React from 'react'
import { useTheme } from '../themeContext'
import { colors } from '../theme'

export interface BgCircleProps {
  circleColor: keyof typeof colors.bgColors
  contain: boolean
}

export const BgCircle = ({ circleColor, contain }: BgCircleProps) => {
  const { colors } = useTheme()

  const color = colors.bgColors[circleColor]

  return (
    <>
      {contain ? (
        <circle cx="500" cy="500" r="500" fill={color} />
      ) : (
        <circle cx="500" cy="630.1601" r="332.441995" fill={color} />
      )}
    </>
  )
}
