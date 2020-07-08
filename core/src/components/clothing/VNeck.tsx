import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from './types'
import { Noop } from '../../utils/Noop'

export const VNeck = ({ color, graphic: Graphic = Noop }: ClothingProps) => {
  const { colors, skin } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <>
      <path
        d="M680.7,905.78c.2-37.1-1.21-70.07-7.74-95.39-10.08-25.35-28.18-40.47-60.12-40.47l22.85,134.47S658.2,914.68,680.7,905.78Z"
        fill={skin.shadow}
      />
      <path
        d="M689.3,895.23a20.28,20.28,0,0,1-3.69,2.42"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M329,809.32c-6.82,25.57-8,59.13-7.74,97,19.9,8.55,50.43-2.15,50.43-2.15L389,771.89C358.14,771.89,339.74,785.79,329,809.32Z"
        fill={skin.shadow}
      />
      <path
        d="M616.66,758.16l-38.44.1c0,53.72-75.33,111.14-75.33,111.14s-80.8-60.58-80.8-111.14l-38.66-.1a13.28,13.28,0,0,0-13.28,13.27v284.69a13.28,13.28,0,0,0,13.28,13.27H622.36a13.27,13.27,0,0,0,13.27-13.27V778C635.63,765.82,629.75,758.16,616.66,758.16Z"
        fill={base}
      />
      <path
        d="M612.84,758.16c63.54,0,73.4,56,73.9,133.16-18.59,11.62-48.91,1.32-48.91,1.32Z"
        fill={base}
      />
      <path
        d="M635.63,831.31,612.84,869.4l11.39,130h11.6V893.78l17.28,2.89C647.49,824.5,635.63,831.31,635.63,831.31Z"
        fill={shadow}
      />
      <path
        d="M389,758.16c-61.78,0-75.82,53.79-76.85,127.66,19,19.85,57.95,4.58,57.95,4.58Z"
        fill={base}
      />
      <path
        d="M370.12,831.31V890.4l-17.31,4.3C358.48,824.63,370.12,831.31,370.12,831.31Z"
        fill={shadow}
      />
      <path
        d="M612.84,758.16c67.42,0,78.45,56.28,78.9,133.78-26.2,12.42-53.91.7-53.91.7"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M389,758.16c-66.79,0-80.08,54.69-80.75,130.71,20.59,14.79,61.85,1.53,61.85,1.53"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M383.43,1069.39H500c-109.19,0-100.91-231.14-129.89-231.14v217.87A13.28,13.28,0,0,0,383.43,1069.39Z"
        fill={shadow}
      />
      <path
        d="M364.15,860.29c-.19-3.67-.11-7.35.06-11s.47-7.34.85-11c.2-1.83.41-3.67.65-5.51s.49-3.67.85-5.5a44.05,44.05,0,0,1,3.59-11,44.05,44.05,0,0,1,3.59,11c.36,1.83.62,3.67.85,5.5s.45,3.68.65,5.51q.58,5.52.86,11c.16,3.67.24,7.35,0,11Z"
        fill={colors.outline}
      />
      <path
        d="M635.63,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H383.43a13.28,13.28,0,0,1-13.28-13.27V990.3c-.26-34.86-.26-69.86,0-105.3V860.29"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M629.63,869.4c-.19-4.18-.1-8.36.06-12.53s.47-8.36.86-12.53c.2-2.09.4-4.18.64-6.27s.49-4.18.86-6.27a54.83,54.83,0,0,1,3.58-12.53,54.37,54.37,0,0,1,3.59,12.53c.36,2.09.63,4.18.85,6.27s.45,4.18.65,6.27c.39,4.17.69,8.35.85,12.53s.26,8.35.06,12.53Z"
        fill={colors.outline}
      />
      <path
        d="M383.43,758.26l233.23-.1"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M310.72,891.94a24.84,24.84,0,0,0,3.68,2.76"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M677.59,882.13a20.25,20.25,0,0,1-6.75,2.52,34.91,34.91,0,0,1-7.21.64,39.94,39.94,0,0,1-7.17-.78c-1.18-.22-2.34-.57-3.49-.87s-2.28-.78-3.38-1.24c1.21,0,2.39.17,3.56.27l3.52.29c1.17,0,2.33.2,3.5.21s2.33.11,3.49.12c2.32.05,4.64,0,7-.18A50.81,50.81,0,0,0,677.59,882.13Z"
        fill={colors.outline}
      />
      <path
        d="M578.22,758.26c0,53.72-75.33,111.14-75.33,111.14s-80.8-60.58-80.8-111.14"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <g transform="translate(0 30)">
        <Graphic />
      </g>
    </>
  )
}
