import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #F7F7F7 ;
  -webkit-font-smoothing: antialiased
}

body, input, button {
  font: 16px "Poppins", sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
`