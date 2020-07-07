import React from 'react'
import { useTheme } from '../../themeContext'

export const HappyEyes = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M296.49,572.61V559.68a49.6,49.6,0,0,1,1.94-25.32,46,46,0,0,1,3.51-7.65C305.29,518,314.29,511,323.29,508c14-4,31-2,42,9,14,15,12,37,12.45,55.62"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M623.31,573c-2.34-26.62,1.66-63.62,36.13-67.17a45,45,0,0,1,8.12,0A43.68,43.68,0,0,1,690,514.41c18,15,14,39,13.95,58.63"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}
