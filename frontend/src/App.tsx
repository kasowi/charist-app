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
import {PayPalScriptProvider} from "@paypal/react-paypal-js";


export default function App() {

    const {ngos, addNgo, updateNgo, deleteNgo} = useNgos();

  return (
      <div>
          (//TODO)
          <PayPalScriptProvider options={{"client-id": "AQ_r8Wlh7sYBG7vbL59BzKxUyTtMXhJI-gS0u0iYgirds2gR7H0dj7GFNb6Os0U8d6fpnwFU1_aPjCnV"}}>
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
          </PayPalScriptProvider>
      </div>
  )
}

