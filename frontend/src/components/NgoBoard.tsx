import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";
import React from "react";
import "./components-css/NgoBoard.css";


type NgoBoardProps = {
    ngos: Ngo[]
    regionName: string
    sdgFilter: string
    searchName: string
}

export default function NgoBoard({ngos, regionName, sdgFilter, searchName}: NgoBoardProps) {

    return (
        <div className={"NgoBoard"}>
            {ngos.filter(ngo => ngo
                .region
                .toLowerCase()
                .includes(regionName))
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
    )

}