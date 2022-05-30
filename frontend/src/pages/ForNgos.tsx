import AppNav from "../components/AppNav";
import React from "react";
import AddNewNgo from "../components/AddNewNgo";
import {Ngo} from "../model/Ngo";

type ForNgosProps = {
    addNgo : (newNgo : Omit<Ngo, "id">) => void
}

export default function ForNgos({addNgo}: ForNgosProps) {
    return(
        <div>
            <AppNav/>
            <h1>For NGOs</h1>
            <AddNewNgo addNgo={addNgo}/>
        </div>
    )
}

