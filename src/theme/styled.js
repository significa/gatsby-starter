import * as sc from 'styled-components'

/** Custom Styled components with theme interface (to export) */
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider: StyledThemeProvider,
} = sc

export { css, createGlobalStyle, keyframes, StyledThemeProvider }

export default styled
