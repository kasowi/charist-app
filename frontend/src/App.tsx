import React from 'react';
import './App.css';
import {ToastContainer} from "react-toastify";
import NgoOverview from "./components/NgoOverview";
import useNgos from "./hooks/useNgos";

function App() {

  const {ngos, addNgo, updateNgo, deleteNgo} = useNgos()

  return (
    <div className="App">
      <ToastContainer/>
      <NgoOverview ngos={ngos} addNgo={addNgo} updateNgo={updateNgo} deleteNgo={deleteNgo}/>
    </div>
  );
}

export default App;
