import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainPage from "@pages/MainPage";
import Reset from "@styles/reset";
import { theme } from "@styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
