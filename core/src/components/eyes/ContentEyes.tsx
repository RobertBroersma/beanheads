import React from 'react'
import { useTheme } from '../../themeContext'

export const ContentEyes = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M703.51,506.11V519a49.59,49.59,0,0,1-1.94,25.32,45.67,45.67,0,0,1-3.51,7.65c-3.35,8.71-12.35,15.71-21.35,18.71-14,4-31,2-42-9-14-15-12-37-12.45-55.62"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M376.69,505.7c2.34,26.61-1.66,63.61-36.13,67.17a45.89,45.89,0,0,1-8.12,0A43.6,43.6,0,0,1,310,564.31c-18-15-14-39-13.95-58.62"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}
