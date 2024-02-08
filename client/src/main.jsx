import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  CSSReset,
  theme,
  ChakraProvider,
  ColorModeProvider,
  ThemeProvider,
} from "@chakra-ui/react";
import { BrowserRouter, Routes } from "react-router-dom";
import axios from "axios";

const serverLocal = "https://mern-stack-url-shortener-backend.vercel.app";
const serverBaseUrl = import.meta.env.VITE_APP_URI;
axios.defaults.baseURL = serverBaseUrl;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <App />
          </ColorModeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
