import React, { useContext } from 'react'
import { colors } from './theme'

export const ThemeContext = React.createContext({
  colors,
  skin: colors.skin.light,
})

export const useTheme = () => useContext(ThemeContext)
