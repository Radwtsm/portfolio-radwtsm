import Header from "../components/Header/Header";
import TextSection from "../components/TextSection/TextSection";
import React from "react";
import theme from "../styles/Theme";

import { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title="Hi, I'm radwtsm" subtitle="frontend developer" additional="Lecce, Italy 🇮🇹"/>
      <TextSection title="My philosophy" paragraph="good shit"/>
    </ThemeProvider>
  );
};

export default Home;
