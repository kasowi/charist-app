import useNgos from "../hooks/useNgos";
import AppNav from "../components/AppNav";
import NgoOverview from "../components/NgoOverview";
import React from "react";

export default function Home() {

        const {ngos} = useNgos();

        return (
            <div className="App">
                <AppNav/>
                <NgoOverview ngos={ngos}/>
            </div>
        );
}