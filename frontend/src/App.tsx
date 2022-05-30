import React from 'react';
import './App.css';
import "@fontsource/raleway/800.css";
import "@fontsource/roboto/";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ForNgos from "./pages/ForNgos";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path ={"/"} element={<Home />}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/forngos"} element={<ForNgos/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
