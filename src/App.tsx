import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"

import { GlobalStyle } from "./styles/global"
import { Navbar } from "./components/Navbar"

export function App () {
  return (
   <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Navbar />
   </ThemeProvider>
  )
}