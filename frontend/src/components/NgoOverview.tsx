import {Ngo} from "../model/Ngo";
import NgoCard from "./NgoCard";

type NgoOverviewProps = {
    ngos : Ngo[]
    addNgo : (newNgo : Omit<Ngo, "id">) => void
    updateNgo : (updatedNgo : Ngo) => void
    deleteNgo : (id : string) => void
}

export default function NgoOverview ({ngos, addNgo, updateNgo, deleteNgo }: NgoOverviewProps) {

    return (
        <div className={"NgoOverview"}>
            <h2>Browse NGOs:</h2>
            {ngos.map(ngos => <NgoCard ngo={ngos}/>)}
        </div>
    )
}