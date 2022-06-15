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
import BackToTopButton from "./components/BackToTopButton";
import Africa from "./pages/regions/Africa";
import Americas from "./pages/regions/Americas";
import Asia from "./pages/regions/Asia";
import Europe from './pages/regions/Europe';
import Oceania from "./pages/regions/Oceania";


export default function App() {

    const {ngos, addNgo, updateNgo, deleteNgo} = useNgos();

  return (
      <div>
          <PayPalScriptProvider options={{"client-id": "AQ_r8Wlh7sYBG7vbL59BzKxUyTtMXhJI-gS0u0iYgirds2gR7H0dj7GFNb6Os0U8d6fpnwFU1_aPjCnV"}}>
      <BrowserRouter>
          <AppNav/>
          <Routes>
              <Route path ={"/"}
                     element={<Home ngos={ngos}/>}/>
              <Route path={"/about"}
                     element={<About/>}/>
              <Route path={"/regions/africa"}
                     element={<Africa ngos={ngos}/>}/>
              <Route path={"/regions/americas"}
                     element={<Americas ngos={ngos}/>}/>
              <Route path={"/regions/asia"}
                     element={<Asia ngos={ngos}/>}/>
              <Route path={"/regions/europe"}
                     element={<Europe ngos={ngos}/>}/>
              <Route path={"/regions/oceania"}
                     element={<Oceania ngos={ngos}/>}/>
              <Route path={"/forngos"}
                     element={<ForNgos
                     addNgo={addNgo}/>}/>
              <Route path={"/ngo/:id"}
                     element={<NgoDetailsPage
                         updateNgo={updateNgo}
                         deleteNgoById={deleteNgo}/>}/>
          </Routes>
      </BrowserRouter>
              <BackToTopButton/>
          </PayPalScriptProvider>
      </div>
  )
}

