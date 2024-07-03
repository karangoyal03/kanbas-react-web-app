import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Lab1 from ".//Labs/Lab1";
import TOC from ".//Labs/TOC";
import Lab2 from ".//Labs/Lab2";
import Lab3 from ".//Labs/Lab3";
import Kanbas from ".//Kanbas";
import Labs from "./Labs";
import Lab4 from "./Labs/Lab4";
import LandingPage from "./LandingPage";
import store from "./../src/Labs/store";
import { Provider } from "react-redux";
function App() {
  return (
    <HashRouter>
       <Provider store={store}>
      <div className="App h-100">
        {/* <TOC /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path ="/Labs" element ={<Labs/>} />
          <Route path="/Labs/Lab1" element={<Lab1 />} />
          <Route path="/Labs/Lab2" element={<Lab2 />} />
          <Route path="/Labs/Lab3" element={<Lab3 />} />
          <Route path="/Labs/Lab4" element={<Lab4 />} /> 
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
