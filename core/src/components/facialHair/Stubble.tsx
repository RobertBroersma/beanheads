import React from 'react'
import { useTheme } from '../../themeContext'

export const StubbleBeard = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M664.05,702.32c28.31-23,54.41-54.72,70.68-86.1-.06-.1-3.49,3.38-3.55,3.28S710.11,638.28,649.66,638c-76.3-.31-60.54-21.68-152.51-21.68-81.42,0-68.49,11.89-145.15,16.15-62.09,3.45-83.62-13-83.62-13l-.2.33a261.18,261.18,0,0,0,40.56,57.53c4.32,4.65,8.86,9.18,13.48,13.48a193.3,193.3,0,0,0,15.35,13c5.18,3.95,10.67,7.72,16.33,11.21,21.71,12,46.48,21.14,73.63,27.13,6.49,1.43,13,2.64,19.31,3.6,65.81,5.85,141.08,6.7,200.74-31.12C653.21,710.78,658.75,706.63,664.05,702.32Z"
        opacity={0.15}
      />
      <circle cx="311.51" cy="659.14" r="4.18" fill={colors.outline} />
      <circle cx="338.51" cy="663.32" r="2.96" fill={colors.outline} />
      <circle cx="401.05" cy="707.98" r="2.96" fill={colors.outline} />
      <circle cx="506.83" cy="711.31" r="2.96" fill={colors.outline} />
      <circle cx="517.63" cy="704.5" r="2.96" fill={colors.outline} />
      <circle cx="578.33" cy="701.54" r="2.96" fill={colors.outline} />
      <circle cx="581.29" cy="683.15" r="2.96" fill={colors.outline} />
      <circle cx="391.69" cy="690.72" r="5.37" fill={colors.outline} />
      <circle cx="600.44" cy="707.45" r="2.09" fill={colors.outline} />
      <circle cx="642.96" cy="696.08" r="4.18" fill={colors.outline} />
      <circle cx="462.56" cy="724.04" r="4.18" fill={colors.outline} />
      <circle cx="642.96" cy="663.22" r="2.96" fill={colors.outline} />
      <circle cx="654.05" cy="673.06" r="2.96" fill={colors.outline} />
    </>
  )
}
