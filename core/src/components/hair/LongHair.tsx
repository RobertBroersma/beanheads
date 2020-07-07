import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'

export const Back = ({ hairColor }: HairProps) => {
  const { colors } = useTheme()

  const { base } = colors.hair[hairColor]

  return (
    <>
      <path
        d="M501.71,209.52c-166.14,0-300.83,134.68-300.83,300.83V816.78c0,166.14,134.69,300.83,300.83,300.83S802.54,982.92,802.54,816.78V510.35C802.54,344.2,667.85,209.52,501.71,209.52Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}

export const Front = ({ hairColor }: HairProps) => {
  const { colors, skin } = useTheme()

  const { base } = colors.hair[hairColor]

  return (
    <>
      <path
        d="M559.29,397.34c-12.87,24-60,37.44-63.83,31.42-4.3-6.73,37.84-55.32,13.9-106.14"
        fill={skin.shadow}
      />
      <path
        d="M746.9,365.72c-43.51-90.29-140.27-142-244.74-142-131.19,0-253.5,95-275.32,223.74,0,0,202.41,15.32,275.25-67.4C511.7,384.77,658.18,457.67,746.9,365.72Z"
        fill={base}
      />
      <path
        d="M502.16,233.15a361.93,361.93,0,0,0-51.86,7.33l-12.68,3.05c-4.2,1.13-8.36,2.37-12.54,3.55l-12.39,4c-4.09,1.46-8.13,3-12.2,4.54a339.08,339.08,0,0,0-46.87,22.71,388.52,388.52,0,0,0-43.25,29.58,233,233,0,0,1,40.79-33.56,258.22,258.22,0,0,1,47.14-24.31c4.17-1.5,8.32-3.06,12.5-4.51,4.24-1.29,8.44-2.7,12.7-3.9s8.58-2.19,12.89-3.21,8.68-1.76,13-2.53A224.82,224.82,0,0,1,502.16,233.15Z"
        fill={colors.outline}
      />
      <path
        d="M537.23,398.81C526.9,418.12,489.07,428.88,486,424c-3.45-5.4,30.38-44.42,11.16-85.22"
        fill={base}
      />
      <path
        d="M240.15,454.33s185.57,8.28,259.86-72c-5,19.52-15.75,34.09-13.79,37.16,2.89,4.53,38-5.42,48.16-23.35,45.56,19,131.48,41.33,206.15-16.09"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}

export const hatScale = 1.12
