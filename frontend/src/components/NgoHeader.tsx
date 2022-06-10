import {Search} from "./Search";
import {FilterNgosBySdg} from "./FilterNgosBySdg";
import React from "react";
import "./components-css/NgoHeader.css";

type NgoHeaderProps = {
    headline: string
    searchName: string
    setSearchName: React.Dispatch<React.SetStateAction<string>>
    setSdgFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function NgoHeader({headline, searchName, setSearchName, setSdgFilter}: NgoHeaderProps) {
    return (
        <div className={"header-container"}>
            <h1>{headline}</h1>
            <div className={"filter-container d-flex justify-content-center"}>
                    <Search searchName={searchName} setSearchName={setSearchName}/>
                    <FilterNgosBySdg setSdgFilter={setSdgFilter}/>
            </div>
        </div>
    )
}