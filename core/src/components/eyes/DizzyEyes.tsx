import React from 'react'
import { useTheme } from '../../themeContext'

export const DizzyEyes = () => {
  const { colors } = useTheme()

  return (
    <>
      <line
        x1="375.88"
        y1="603.9"
        x2="306.24"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <line
        x1="306.24"
        y1="603.9"
        x2="375.88"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <line
        x1="695.99"
        y1="603.9"
        x2="626.34"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <line
        x1="626.34"
        y1="603.9"
        x2="695.99"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
    </>
  )
}
