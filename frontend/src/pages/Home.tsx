import AppNav from "../components/AppNav";
import NgoOverview from "../components/NgoOverview";
import React from "react";
import {Ngo} from "../model/Ngo";

type HomeProps = {
    ngos: Ngo[]
}

export default function Home({ngos}: HomeProps) {

        return (
            <div className="Home">
                    <AppNav/>
                <NgoOverview ngos={ngos}/>
            </div>
        );
}

