import NgoHeader from "../../components/NgoHeader";
import NgoBoard from "../../components/NgoBoard";
import React, {useState} from "react";
import {Ngo} from "../../model/Ngo";

type RegionProps = {
    ngos : Ngo[]
}

export default function Europe({ngos}: RegionProps) {

    const [searchName, setSearchName] = useState<string>('');
    const [sdgFilter, setSdgFilter] = useState<string>('');

    return(
        <div>
            <NgoHeader headline={"NGOs in Europe"}
                       searchName={searchName}
                       setSearchName={setSearchName}
                       setSdgFilter={setSdgFilter}/>
            <NgoBoard ngos={ngos}
                      regionName={"europe"}
                      sdgFilter={sdgFilter}
                      searchName={searchName}/>
        </div>
    )
}
