import { StrictMode } from "react";
import "tailwindcss/tailwind.css"
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ThemeStore } from "./context";
import Theme from "./styles/Theme";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
    <Router>
    <ThemeStore>
      <Theme>
    <App />
    </Theme>
    </ThemeStore>
  </Router></ReduxProvider>
  </StrictMode>
  ,
  rootElement
);

