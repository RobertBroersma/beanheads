import React from 'react'
import { useTheme } from '../../themeContext'

export const Grin = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M463.75,593.17c15.55,0,25.12,12.76,36.49,12.76s25.91-12.76,41.27-12.76,23.72,11.12,23.72,26.52c0,16.65-16.75,46-62.6,46s-65.4-27.74-65.4-45.45C437.23,603.89,448.2,593.17,463.75,593.17Z"
        fill={colors.white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <line
        x1="477.85"
        y1="596.6"
        x2="477.85"
        y2="662.1"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <line
        x1="526.99"
        y1="596.6"
        x2="526.99"
        y2="662.1"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}
