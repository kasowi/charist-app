import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React, {ChangeEvent, useState} from "react";
import "./components-css/NgoOverview.css";

type NgoOverviewProps = {
    ngos : Ngo[]
}

export default function NgoOverview ({ngos}: NgoOverviewProps) {

    const [search, setSearch] = useState<string>('')

    return (
        <div className={"NgoOverview"}>
            <div className={"NgoHeader"}>
                <h1>All NGOs</h1>
                <input type={"text"} value={search} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
                </div>
                <div className={"NgoBoard"}>
                    {ngos.filter(ngo => ngo.name.toLowerCase().includes(search.toLowerCase())).map(obj => <NgoCard ngo={obj}/>)}
                </div>
        </div>
    )
}