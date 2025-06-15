import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"

import { GlobalStyle } from "./styles/global"
import { SectionHome } from "./components/SectionHome"

export function App () {
  return (
   <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SectionHome />
   </ThemeProvider>
  )
}