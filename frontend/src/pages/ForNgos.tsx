import AppNav from "../components/AppNav";
import React from "react";
import {Ngo} from "../model/Ngo";

type ForNgoProps = {
    addNgo : (newNgo : Omit<Ngo, "id">) => void
    updateNgo : (id: string, ngoToUpdate: Omit<Ngo, "id">) => void
    deleteNgo : (id : string) => void
}

export default function ForNgos() {
    return(
        <div>
            <AppNav/>
            <h1>For NGOs</h1>
        </div>
    )
}