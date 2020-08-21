import styled, * as styledComponents from "styled-components";

const { createGlobalStyle } = styledComponents;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  primaryColor: "#ededee",
  secondaryColor: "#f4f4f4",
  red: "#c0392b",
  green: "#19b55e",
  white: "#fff",
  darkGray: "#555",
};

export default styled;
export const { css } = styledComponents;
