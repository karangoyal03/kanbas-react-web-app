import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Lab1 from ".//Labs/Lab1";
import TOC from ".//Labs/TOC";
import Lab2 from ".//Labs/Lab2";
import Lab3 from ".//Labs/Lab3";
import Kanbas from ".//Kanbas";
import Labs from "./Labs";
import LandingPage from "./LandingPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <TOC /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} /> 
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
