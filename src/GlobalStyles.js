import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}

.App {
  font-family: "Fredericka the Great";
  text-align: center;
  height: 100vh;
}`

export default GlobalStyle
