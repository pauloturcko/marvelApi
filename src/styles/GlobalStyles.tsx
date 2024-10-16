import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Poppins:wght@400&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textColor02};
    font-family: ${(props) => props.theme.fonts.main};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${(props) => props.theme.colors.mainColor};
    font-family: ${(props) => props.theme.fonts.main};
  }

  button {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor02};
    background-color: ${(props) => props.theme.colors.background};

    &:hover {
      background-color: transparent;
      border: 1.5px solid ${(props) => props.theme.colors.background};
    }
  }
`;

export default GlobalStyle;