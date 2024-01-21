import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

body{
  font-family: "Manrope", sans-serif;
}
img {
  display: block;
  max-width: 100%;
  object-fit: cover; 
  height: auto;
  margin: 0 auto;
}

ul,li,h1, h2, h3, h4, h5, h6, p {
font-family: inherit;
padding: 0;
margin: 0;
list-style: none;
}

a {
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}

`;