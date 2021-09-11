import React, { useState } from "react";

const ThemeContext = React.createContext(); // line A - creating the context

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState({
    background: "#272823",
    title: "#6495ed",
    text: "#fff"
  }); // line B - setting the initial theme

  const switchTheme = (theme) => {
    setTheme(theme);
  }; // line C - changing the theme

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
