import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --purple:#574AE8;
    --white:#FFFFFF;
    --white-2D:#f9f9f9;
    --gray:#717171;
    --gray-dark:#1A202C;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body{
    background: var(--background-gray);
    -webkit-font-smoothing:antialiased;
  }
  body,input,textarea,button{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  button{
    cursor:pointer;
  }
`;