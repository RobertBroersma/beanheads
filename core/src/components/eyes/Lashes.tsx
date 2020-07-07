import React from 'react'
import { useTheme } from '../../themeContext'

export const RightLash = () => {
  const { colors } = useTheme()

  return (
    <path
      d="M721.21,500.43c7.82-6.25,14.69-21.65,12.5-20-15.72,12.14-28,10-30.28,9.19-61.66-16.6-100.28,14-72.48,9,32.73-11.48,76.32-2.8,89.38,17.44,12.5-2.88,27.76-11.11,33.4-26.94C734.42,500.22,732.56,500.21,721.21,500.43Z"
      fill={colors.outline}
      fillRule="evenodd"
    />
  )
}

export const LeftLash = () => {
  const { colors } = useTheme()

  return (
    <path
      d="M243.89,489.13c5.64,15.83,20.9,24.06,33.4,26.94,13.06-20.24,56.65-28.92,89.37-17.44,27.8,5-10.81-25.57-72.47-9-2.31.85-14.56,2.95-30.28-9.19-2.19-1.69,4.68,13.71,12.5,20C265.06,500.21,263.2,500.22,243.89,489.13Z"
      fill={colors.outline}
      fillRule="evenodd"
    />
  )
}
