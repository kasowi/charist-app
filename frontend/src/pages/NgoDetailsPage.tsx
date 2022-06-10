import {Ngo} from "../model/Ngo";
import {useNavigate, useParams} from "react-router-dom";
import useDetailedNgo from "../hooks/useDetailedNgo";
import "../components/components-css/NgoDetailsPage.css";
import {useEffect, useState} from "react";
import EditNgoDetails from "../components/EditNgoDetails";
import ShowNgoDetails from "../components/ShowNgoDetails";
import {Button} from "react-bootstrap";

type NgoDetailsPageProps = {
    updateNgo : (updatedNgo: Ngo) => Promise<Ngo | void>
    deleteNgoById : (id: string) => void
}

export default function NgoDetailsPage({updateNgo, deleteNgoById}: NgoDetailsPageProps) {
    const navigate = useNavigate()
    const {id} = useParams()
    const {detailedNgo, findNgoById, setDetailedNgo} = useDetailedNgo()
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

    useEffect(() => {

        if(id) {
            findNgoById(id)
        }
        // eslint-disable-next-line
    }, [id])

    const toggleEditing = () => {
        setEditingEnabled(!editingEnabled);
    }

    const updateDetailedNgo = (updatedNgo: Ngo) => {
        updateNgo(updatedNgo)
            .then(() => setDetailedNgo(updatedNgo))
            .then(() => toggleEditing())
    }


    return (
        <div className={"ngo-details"}>
            <h1>Details</h1>
            <Button variant="light" size="sm" name={"back"} onClick={() => navigate(`/`)}>Back</Button>
            {detailedNgo &&
            <div>
                {editingEnabled
                    ? <EditNgoDetails ngo={detailedNgo} updateNgo={updateDetailedNgo}/>
                    : <ShowNgoDetails ngo={detailedNgo} toggleEditing={toggleEditing} deleteNgoById={deleteNgoById}/>}
            </div>
            }
            <Button variant="light" size="sm" name={"back"} onClick={() => navigate(`/`)}>Back</Button>
        </div>
    )
}