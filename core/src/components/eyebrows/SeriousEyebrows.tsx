import React from 'react'
import { useTheme } from '../../themeContext'

export const SeriousEyebrows = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M407.29,474.84H286.65c-5.56,0-11.12-.08-16.68,0h-.24c-5.23,0-10.24,4.6-10,10a10.17,10.17,0,0,0,10,10H390.37c5.55,0,11.12.08,16.68,0h.24c5.23,0,10.24-4.6,10-10a10.18,10.18,0,0,0-10-10Z"
        fill={colors.outline}
      />
      <path
        d="M726.32,474.84H605.68c-5.56,0-11.12-.08-16.68,0h-.24c-5.23,0-10.24,4.6-10,10a10.17,10.17,0,0,0,10,10H709.4c5.56,0,11.12.08,16.68,0h.24c5.23,0,10.24-4.6,10-10a10.18,10.18,0,0,0-10-10Z"
        fill={colors.outline}
      />
    </>
  )
}
