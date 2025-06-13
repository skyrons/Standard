import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"

export function App () {
  return (
   <ThemeProvider theme={defaultTheme}>
      <h1>Home</h1>
   </ThemeProvider>
  )
}