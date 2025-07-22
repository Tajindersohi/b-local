import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/AboutPage";
import Contact from "./pages/ContactPage/Contact";
import Header from "./components/common/Header/index";

function App() {  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
