import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <h1>cool</h1>
    </BrowserRouter>
  );
}

export default App;
