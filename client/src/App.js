import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/AboutPage";
import Contact from "./pages/ContactPage/Contact";
import Header from "./components/common/Header/index";
import GeneralLayout from "./components/common/GeneralLayout.jsx";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralLayout><Home/></GeneralLayout>} />
        <Route path="/about" element={<GeneralLayout><About /></GeneralLayout>} />
        <Route path="/contact" element={<GeneralLayout><Contact /></GeneralLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
