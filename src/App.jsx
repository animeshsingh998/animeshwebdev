import React from "react";
import "./app.css";
import { Navbar } from "./components";
import { Footer } from "./containers";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
