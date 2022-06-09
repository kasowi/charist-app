import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React, {ChangeEvent, useState} from "react";
import "./components-css/NgoOverview.css";
import {Tab, Tabs} from "react-bootstrap";

type NgoOverviewProps = {
    ngos : Ngo[]
}

export default function NgoOverview ({ngos}: NgoOverviewProps) {

    const [searchName, setSearchName] = useState<string>('');

    return (
        <div className={"NgoOverview"}>
            <div className={"NgoTabFilter"}>
                <Tabs defaultActiveKey={"all"}>
                    <Tab eventKey="all"
                         title="All">
                        <div className={"NgoHeader"}>
                            <h1>All NGOs</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .name
                                .toLowerCase()
                                .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="africa"
                         title="Africa">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Africa</h1>
                            <input type={"text"} value={searchName} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("africa"))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="americas"
                         title="Americas">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in the Americas</h1>
                            <input type={"text"} value={searchName} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("americas"))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="asia"
                         title="Asia">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Asia</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("asia"))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="europe" title="Europe">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Europe</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("europe"))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="oceania" title="Oceania">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Oceania</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("oceania"))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
