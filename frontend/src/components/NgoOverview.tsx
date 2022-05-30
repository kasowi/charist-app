import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React, {ChangeEvent, useState} from "react";
import "./components-css/NgoOverview.css";
import {Tab, Tabs} from "react-bootstrap";

type NgoOverviewProps = {
    ngos : Ngo[]
}

export default function NgoOverview ({ngos}: NgoOverviewProps) {

    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState<string>('all');
    const [filteredByRegion, setFilteredByRegion] = useState<Ngo[]>(ngos);

    const regionFilter = (event:ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value)
        setFilteredByRegion(ngos.filter(ngo => ngo.region.toLowerCase() == region.toLowerCase()));
        console.log(filteredByRegion)
    }

    return (
        <div className={"NgoOverview"}>
            <div className={"NgoTabFilter"}>
                <Tabs>
                    <Tab eventKey="all" title="All">
                        <div className={"NgoHeader"}>
                            <h1>All NGOs</h1>
                            <input type={"text"} value={search} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo.name.toLowerCase().includes(search.toLowerCase())).map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="africa" title="Africa">
                        <p>africa</p>
                    </Tab>
                    <Tab eventKey="americas" title="Americas">
                        <p>americas</p>
                    </Tab>
                    <Tab eventKey="asia" title="Asia">
                        <p>asia</p>
                    </Tab>
                    <Tab eventKey="europe" title="Europe">
                        <p>europe</p>
                    </Tab>
                    <Tab eventKey="oceania" title="Oceania">
                        <p>oceania</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

