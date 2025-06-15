import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['brandDark']};
  }

  body {
    background-color: ${props => props.theme['brand-light']};
    color: ${props => props.theme['brand-primary']};
    -webkit-font-smoothing: antialiased;
  }

  border-style, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

`;