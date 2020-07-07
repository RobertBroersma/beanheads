import React from 'react'
import { useTheme } from '../../themeContext'

export const RoundGlasses = () => {
  const { colors } = useTheme()

  return (
    <>
      <circle cx="338.9" cy="548.55" r="93.31" fill="white" opacity={0.2} />
      <path
        d="M744.47,606.82a103.27,103.27,0,0,1-188.33-51.49c-37-14.6-74.43-14.47-114.19.39a103.43,103.43,0,0,1-103,96.13c-32.48,0-76-36.5-71-28.39,14,20.69,47,36.45,72.54,36.45,54.55,0,97.87-39.29,101.56-92.92,39.76-14.85,77.23-15,114.19-.39,3.5,53.82,48.39,93.53,103.07,93.53C704,660.13,729.4,626,744.47,606.82Z"
        opacity={0.15}
      />
      <path
        d="M320,648.75,443.07,525.67a93.05,93.05,0,0,0-10-17.27L302.72,638.76A93.1,93.1,0,0,0,320,648.75Z"
        fill="white"
        opacity={0.4}
      />
      <circle
        cx="338.9"
        cy="548.55"
        r="93.31"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <circle
        cx="659.21"
        cy="548.55"
        r="93.31"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <path
        d="M432.77,548.55c45.2-18.31,89.61-19,133.14,0"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <path
        d="M314.7,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.66,11.66,0,0,1,314.7,492.5Z"
        fill="white"
      />
      <path
        d="M325.37,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.85-4.1A3.76,3.76,0,0,1,325.37,488.67Z"
        fill="white"
      />
      <circle cx="659.21" cy="548.55" r="93.31" fill="white" opacity={0.2} />
      <path
        d="M645.19,640.81,751.47,534.52a94.74,94.74,0,0,0-2.41-11.22L634,638.4A94.31,94.31,0,0,0,645.19,640.81Z"
        fill="white"
        opacity={0.4}
      />
      <circle
        cx="659.21"
        cy="548.55"
        r="93.31"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <path
        d="M635,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.7,11.7,0,0,1,635,492.5Z"
        fill="white"
      />
      <path
        d="M645.69,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.84-4.1A3.77,3.77,0,0,1,645.69,488.67Z"
        fill="white"
      />
    </>
  )
}
