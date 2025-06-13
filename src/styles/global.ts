import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${props => props.theme.colors['bgLight']};
    font-size: 1.6rem;
    text-align: center;
    overflow: overlay;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: block;
  }
`;