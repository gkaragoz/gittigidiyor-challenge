import styled, * as styledComponents from "styled-components";

const { createGlobalStyle } = styledComponents;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    margin: 0;
    background-color: #ededee;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const theme = {
  colors: {
    primaryColor: "#ededee",
    secondaryColor: "#f4f4f4",
    red: "#c0392b",
    green: "#19b55e",
    white: "#fff",
    darkGray: "#555",
  },
  mediaQueries: {
    wideScreen: "1110px",
    tabletScreen: "840px",
    phoneScreen: "710px",
  },
  fontSizes: {
    veryLarge: "2.6rem",
    large: "2rem",
    medium: "1.6rem",
    small: "1.2rem",
  },
};

export default styled;
export const { css } = styledComponents;
