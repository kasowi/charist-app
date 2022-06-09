import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React, {ChangeEvent, useState} from "react";
import "./components-css/NgoOverview.css";
import {ButtonGroup, Tab, Tabs, ToggleButton} from "react-bootstrap";

type NgoOverviewProps = {
    ngos : Ngo[]
}

export default function NgoOverview ({ngos}: NgoOverviewProps) {

    const [searchName, setSearchName] = useState<string>('');
    const [sdgFilter, setSdgFilter] = useState<string>('');

    const sdgOptions = [
        {name: '1', value: '1'},
        {name: '2', value: '2'},
        {name: '3', value: '3'},
        {name: '4', value: '4'},
        {name: '5', value: '5'},
        {name: '6', value: '6'},
        {name: '7', value: '7'},
        {name: '8', value: '8'},
        {name: '9', value: '9'},
        {name: '10', value: '10'},
        {name: '11', value: '11'},
        {name: '12', value: '12'},
        {name: '13', value: '13'},
        {name: '14', value: '14'},
        {name: '15', value: '15'},
        {name: '16', value: '16'},
        {name: '17', value: '17'},
    ];

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
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                            <ButtonGroup>
                                {sdgOptions.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    size="sm"
                                    variant={'outline-success'}
                                    name="radio"
                                    value={radio.value}
                                    checked={sdgFilter === radio.value}
                                    onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                >{radio.name}</ToggleButton>
                                ))}
                            </ButtonGroup>
                            </div>
                        </div>
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
                         title="Africa">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Africa</h1>
                            <input type={"text"} value={searchName} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                                <ButtonGroup>
                                    {sdgOptions.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            size="sm"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={sdgFilter === radio.value}
                                            onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                        >{radio.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("africa"))
                                .filter(ngo => ngo
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
                    <Tab eventKey="americas"
                         title="Americas">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in the Americas</h1>
                            <input type={"text"} value={searchName} placeholder={"Type to search ..."} onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                                <ButtonGroup>
                                    {sdgOptions.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            size="sm"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={sdgFilter === radio.value}
                                            onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                        >{radio.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("americas"))
                                .filter(ngo => ngo
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
                    <Tab eventKey="asia"
                         title="Asia">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Asia</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                                <ButtonGroup>
                                    {sdgOptions.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            size="sm"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={sdgFilter === radio.value}
                                            onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                        >{radio.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("asia"))
                                .filter(ngo => ngo
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
                    <Tab eventKey="europe" title="Europe">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Europe</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                                <ButtonGroup>
                                    {sdgOptions.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            size="sm"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={sdgFilter === radio.value}
                                            onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                        >{radio.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("europe"))
                                .filter(ngo => ngo
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
                    <Tab eventKey="oceania" title="Oceania">
                        <div className={"NgoHeader"}>
                            <h1>NGOs in Oceania</h1>
                            <input type={"text"}
                                   value={searchName}
                                   placeholder={"Type to search ..."}
                                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
                            <div className={"filterSdg"}>
                                <b>FILTER BY SDG </b>
                                <ButtonGroup>
                                    {sdgOptions.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            size="sm"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={sdgFilter === radio.value}
                                            onChange={(e) => setSdgFilter(e.currentTarget.value)}
                                        >{radio.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={"NgoBoard"}>
                            {ngos.filter(ngo => ngo
                                .region
                                .toLowerCase()
                                .includes("oceania"))
                                .filter(ngo => ngo
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
                </Tabs>
            </div>
        </div>
    )
}
