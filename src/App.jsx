import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </ScrollToTop>
      <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
