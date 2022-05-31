import Header from "../components/Header/Header";
import React from "react";
import theme from "../styles/Theme";

import { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default Home;
