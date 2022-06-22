import Header from "../components/Header/Header";
import React from "react";
import theme from "../styles/Theme";

import { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title="Hi, I'm radwtsm" subtitle="frontend developer" additional="Lecce, Italy 🇮🇹"/>
    </ThemeProvider>
  );
};

export default Home;
