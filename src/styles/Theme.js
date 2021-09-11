import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";
import { useSelector } from "react-redux";
const themes = {
  light: {
    background: "#fff",
    title: "#ff6347",
    text: "#000"
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    transition: all 0.5s;
  }
`;
const Theme = ({ children }) => {
  const init = useSelector((state) => state.preferences.theme);
  console.log(init)
  const { theme } = useContext(ThemeContext);
  // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
