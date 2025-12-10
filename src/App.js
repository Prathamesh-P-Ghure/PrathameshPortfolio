import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense shows fallback while loading components */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
