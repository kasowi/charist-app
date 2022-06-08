import React from 'react';
import './App.css';
import "@fontsource/raleway/800.css";
import "@fontsource/roboto/";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import useNgos from "./hooks/useNgos";
import ForNgos from "./pages/ForNgos";
import NgoDetailsPage from "./pages/NgoDetailsPage";
import AppNav from "./components/AppNav";

export default function App() {

    const {ngos, addNgo, updateNgo, deleteNgo} = useNgos();

  return (
      <BrowserRouter>
          <AppNav/>
          <Routes>
              <Route path ={"/"}
                     element={<Home ngos={ngos}/>}/>
              <Route path={"/about"}
                     element={<About/>}/>
              <Route path={"/forngos"}
                     element={<ForNgos
                     addNgo={addNgo}/>}/>
              <Route path={"/ngo/:id"}
                     element={<NgoDetailsPage
                         updateNgo={updateNgo}
                         deleteNgoById={deleteNgo}/>}/>
          </Routes>
      </BrowserRouter>
  )
}

