import {useState} from "react";
import {Ngo} from "../model/Ngo";
import {getNgoById} from "../service/NgoApiService";


export default function useDetailedNgo() {

    const [detailedNgo, setDetailedNgo] = useState<Ngo>()

    const findNgoById = (id: string) => {
        getNgoById(id)
            .then(data => setDetailedNgo(data))
            .catch((error) => console.log(error))
    }

    return {detailedNgo, findNgoById, setDetailedNgo}
}

