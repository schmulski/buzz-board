import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden
  height: 100vh;
  width: 100 wh;
}

.App {
  font-family: "Fredericka the Great";
  text-align: center;
  height: 100vh;
}`

export default GlobalStyle
