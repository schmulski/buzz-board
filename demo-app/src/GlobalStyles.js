import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.App {
  font-family: "Josefin Slab", serif;
  text-align: center;
  height: 100vh;

}`;

export default GlobalStyle;
