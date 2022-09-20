import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Inter', sans-serif;
    background: url(https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
`;
