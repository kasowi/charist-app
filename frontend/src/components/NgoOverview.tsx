import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React, {useState} from "react";
import "./components-css/NgoOverview.css";
import {Tab, Tabs} from "react-bootstrap";
import NgoBoard from "./NgoBoard";
import NgoHeader from "./NgoHeader";

type NgoOverviewProps = {
    ngos : Ngo[]
}

export default function NgoOverview({ngos}: NgoOverviewProps) {
    
    const [searchName, setSearchName] = useState<string>('');
    const [sdgFilter, setSdgFilter] = useState<string>('');

    return (
        <div className={"NgoOverview"}>
            <div className={"NgoTabFilter"}>
                <Tabs defaultActiveKey={"all"}>
                    <Tab eventKey="all"
                         id="all"
                         title="All">
                        <NgoHeader headline={"All NGOs"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .sdg
                                .toLowerCase()
                                .includes(sdgFilter))
                                .filter(ngo => ngo
                                    .name
                                    .toLowerCase()
                                    .includes(searchName.toLowerCase()))
                                .map(obj => <NgoCard ngo={obj}/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="africa"
                         id="africa"
                         title="Africa">
                        <NgoHeader headline={"NGOs in Africa"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <NgoBoard ngos={ngos}
                                  regionName={"africa"}
                                  sdgFilter={sdgFilter}
                                  searchName={searchName}/>
                    </Tab>
                    <Tab eventKey="americas"
                         id="americas"
                         title="Americas">
                        <NgoHeader headline={"NGOs in the Americas"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <NgoBoard ngos={ngos}
                                  regionName={"americas"}
                                  sdgFilter={sdgFilter}
                                  searchName={searchName}/>
                    </Tab>
                    <Tab eventKey="asia"
                         id="asia"
                         title="Asia">
                        <NgoHeader headline={"NGOs in Asia"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <NgoBoard ngos={ngos}
                                  regionName={"asia"}
                                  sdgFilter={sdgFilter}
                                  searchName={searchName}/>
                    </Tab>
                    <Tab eventKey="europe"
                         id="europe"
                         title="Europe">
                        <NgoHeader headline={"NGOs in Europe"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <NgoBoard ngos={ngos}
                                  regionName={"europe"}
                                  sdgFilter={sdgFilter}
                                  searchName={searchName}/>
                    </Tab>
                    <Tab eventKey="oceania"
                         id="oceania"
                         title="Oceania">
                        <NgoHeader headline={"NGOs in Oceania"}
                                   searchName={searchName}
                                   setSearchName={setSearchName}
                                   setSdgFilter={setSdgFilter}/>
                        <NgoBoard ngos={ngos}
                                  regionName={"oceania"}
                                  sdgFilter={sdgFilter}
                                  searchName={searchName}/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
