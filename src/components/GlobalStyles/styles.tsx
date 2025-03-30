import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const Normalize = createGlobalStyle`
  ${normalize()}

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    font-family: "Open Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    line-height: normal;
    background: #fff;
    font-size: 25px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    touch-action: manipulation;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
  }

  a {
    padding: 0 10px;
  }
  
  a.active {
    color: red
  }
`
