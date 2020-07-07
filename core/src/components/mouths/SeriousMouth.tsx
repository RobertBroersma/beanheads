import React from 'react'
import { useTheme } from '../../themeContext'

export const SeriousMouth = () => {
  const { colors } = useTheme()

  return (
    <line
      x1="446.66"
      y1="606.02"
      x2="542.53"
      y2="606.02"
      fill="none"
      stroke={colors.outline}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth="12px"
    />
  )
}
