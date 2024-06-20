import React from 'react'
import { useTheme } from '../../themeContext'

export const JavaScriptGraphic = () => {
  const { colors } = useTheme()

  return (
    <>
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        stroke={colors.white}
        fill="#e9ca32"
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ffde25"
      />
    </>
  )
}
