import React from 'react'
import { useTheme } from '../../themeContext'

export const SimpleEyes = () => {
  const { colors } = useTheme()

  return (
    <>
      <circle cx="341.06" cy="569.08" r="20.96" fill={colors.outline} />
      <path
        d="M340.93,586c1.79-.1,3.79-.26,5.7-.46s3.86-.44,5.79-.74,3.87-.65,5.81-1,3.92-.68,6-.83a24.74,24.74,0,0,1-5.31,3.12,48.86,48.86,0,0,1-5.78,2,50.61,50.61,0,0,1-6,1.36,36.13,36.13,0,0,1-6.24.54Z"
        fill={colors.outline}
      />
      <circle cx="661.77" cy="569.08" r="20.96" fill={colors.outline} />
      <path
        d="M661.77,586c1.8-.1,3.79-.26,5.7-.46s3.87-.44,5.8-.74,3.87-.65,5.81-1,3.92-.68,6-.83a25,25,0,0,1-5.31,3.12,48.86,48.86,0,0,1-5.78,2,51.06,51.06,0,0,1-6,1.36,36.22,36.22,0,0,1-6.24.54Z"
        fill={colors.outline}
      />
    </>
  )
}
